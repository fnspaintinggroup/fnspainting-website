"""Download private enquiry originals, verify locally, then acknowledge storage.
Never infer PC storage from a browser download click. Never delete unverified copies.
"""
from pathlib import Path
from datetime import datetime,timezone,timedelta
from urllib.parse import urlparse,urlencode
import argparse,hashlib,json,os,re,urllib.request,urllib.error

DEFAULT_ROOT=Path.home()/'Documents'/'F&S PaintingGroup with Codex'/'02_고객_견적'/'웹문의'
ID=re.compile(r'^Q-\d{8}-[a-f0-9-]{36}$')
class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self,req,fp,code,msg,headers,newurl):
        raise RuntimeError('Archive endpoint redirect refused; verify the configured website.')

def checked_target(root,relative):
    root=root.resolve();target=(root/relative).resolve()
    if not target.is_relative_to(root):raise RuntimeError('File path outside the archive root')
    return target

def digest(path):
    h=hashlib.sha256();size=0
    with path.open('rb') as file:
        for chunk in iter(lambda:file.read(1024*1024),b''):h.update(chunk);size+=len(chunk)
    return {'size':size,'sha256':h.hexdigest()}

class ArchiveClient:
    def __init__(self,base,key):
        parsed=urlparse(base)
        if parsed.hostname not in ('www.fnspainting.com.au','127.0.0.1','localhost') or (parsed.hostname=='www.fnspainting.com.au' and parsed.scheme!='https'):
            raise RuntimeError('Unapproved archive server. Use the existing company website.')
        self.base=base.rstrip('/');self.key=key;self.opener=urllib.request.build_opener(NoRedirect)
    def request(self,path,payload=None):
        data=None if payload is None else json.dumps(payload).encode('utf-8')
        req=urllib.request.Request(self.base+path,data=data,headers={'Authorization':'Bearer '+self.key,'Content-Type':'application/json'})
        return self.opener.open(req,timeout=90)
    def json(self,path,payload=None):
        with self.request(path,payload) as response:return json.load(response)
    def download(self,row,index,target):
        plan=row['files'][index];part=checked_target(target.parent,target.name+'.part')
        path='/api/quote-storage/download?'+urlencode({'id':row['id'],'index':index})
        try:
            with self.request(path) as response,part.open('wb') as file:
                size=0
                while True:
                    chunk=response.read(1024*1024)
                    if not chunk:break
                    size+=len(chunk)
                    if size>plan['size'] or size>20*1024*1024:raise RuntimeError('Downloaded photo exceeds its verified size')
                    file.write(chunk)
                file.flush();os.fsync(file.fileno())
            actual=digest(part)
            if actual!={'size':plan['size'],'sha256':plan['sha256']}:raise RuntimeError('Downloaded photo failed content verification')
            if target.exists():
                if digest(target)!=actual:raise RuntimeError('A different local file already exists; original preserved')
                part.unlink()
            else:os.rename(part,target)
        except Exception:
            # A partial download is retained for diagnosis; it is never acknowledged.
            raise

def archive_row(client,row,root,delete_eligible=False,now=None):
    now=now or datetime.now(timezone.utc)
    if not ID.fullmatch(str(row.get('id',''))):raise RuntimeError('Invalid enquiry identifier')
    folder=checked_target(root,Path(row['id'][2:6])/row['id'])
    folder.mkdir(parents=True,exist_ok=True)
    receipts=[]
    for index,plan in enumerate(row['files']):
        extension=plan['path'].rsplit('.',1)[-1]
        if extension not in ('jpg','png','webp','heic','heif'):raise RuntimeError('Unexpected photo file type')
        target=checked_target(folder,Path('원본사진')/f'photo-{index+1}.{extension}')
        target.parent.mkdir(parents=True,exist_ok=True)
        expected={'size':plan['size'],'sha256':plan['sha256']}
        if target.exists():
            if digest(target)!=expected:raise RuntimeError('Local original failed verification; no online deletion permitted')
        elif row.get('purged'):raise RuntimeError('Online copy already removed and local original missing; restore business backup')
        else:client.download(row,index,target)
        actual=digest(target)
        if actual!=expected:raise RuntimeError('Local file verification mismatch')
        receipts.append(actual)
    # Save all request details after every original has been verified.
    meta=checked_target(folder,'접수_보관기록.json')
    temp=checked_target(folder,'접수_보관기록.json.tmp')
    temp.write_text(json.dumps({'request':row,'verified_at':now.isoformat(),'files':receipts},ensure_ascii=False,indent=2),encoding='utf-8')
    os.replace(temp,meta)
    receipt=row.get('archive')
    if not receipt:
        receipt=client.json('/api/quote-storage/admin',{'id':row['id'],'action':'acknowledge','files':receipts})
    purged=False
    if delete_eligible and not row.get('purged'):
        saved=datetime.fromisoformat(receipt['savedAt'].replace('Z','+00:00'))
        if now-saved>=timedelta(days=7):
            # Revalidate current PC copies on this run before requesting server-side deletion.
            client.json('/api/quote-storage/admin',{'id':row['id'],'action':'purge','files':receipts})
            purged=True
    return {'id':row['id'],'files_verified':len(receipts),'folder':str(folder),'online_photos_deleted':purged}

def main():
    parser=argparse.ArgumentParser();parser.add_argument('--base-url',default='https://www.fnspainting.com.au');parser.add_argument('--root',type=Path,default=DEFAULT_ROOT);parser.add_argument('--delete-eligible',action='store_true');args=parser.parse_args()
    key=os.environ.get('FNS_QUOTE_ARCHIVE_KEY','')
    if len(key)<32:raise RuntimeError('PC archive access is not configured. No network requests or deletion performed.')
    client=ArchiveClient(args.base_url,key)
    data=client.json('/api/quote-storage/admin')
    results=[];failures=[]
    for row in data.get('requests',[]):
        try:results.append(archive_row(client,row,args.root,args.delete_eligible))
        except Exception as error:failures.append({'id':row.get('id'),'message':str(error)})
    print(json.dumps({'verified':results,'failed':failures},ensure_ascii=False))
    return 1 if failures else 0
if __name__=='__main__':
    try:raise SystemExit(main())
    except (RuntimeError,urllib.error.URLError) as error:print(str(error));raise SystemExit(1)
