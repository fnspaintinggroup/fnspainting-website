type UploadPlan = { path: string; name: string; type: string; size: number; sha256: string };
export type PrivateUploadSession = { id: string; session: string; files: UploadPlan[]; uploaded: boolean[]; fingerprint: string };
async function post(path: string, data: unknown) {
  const response = await fetch(path,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
  const value = await response.json();
  if(!response.ok) throw new Error(value.message||"The photo request could not be completed.");
  return value;
}
export async function fileSha256(file: File) {
  const bytes = await crypto.subtle.digest("SHA-256",await file.arrayBuffer());
  return Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,"0")).join("");
}
export async function submitPrivateQuote(fields: Record<string,unknown>, originals: File[], previous: PrivateUploadSession | null, saveSession: (value:PrivateUploadSession)=>void) {
  const files=[];
  for(const file of originals) {
    const extension=file.name.split('.').pop()?.toLowerCase();
    const known:Record<string,string>={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",webp:"image/webp",heic:"image/heic",heif:"image/heif"};
    files.push({name:file.name,size:file.size,type:known[extension||""]||file.type,sha256:await fileSha256(file)});
  }
  const fingerprint=JSON.stringify({fields,files});
  const saved=previous?.fingerprint===fingerprint?previous:null;
  const plan=await post("/api/quote-storage/prepare",saved?{id:saved.id,session:saved.session}:{...fields,files});
  const state:PrivateUploadSession={...plan,fingerprint};
  saveSession(state);
  const {upload}=await import("@vercel/blob/client");
  for(let index=0;index<originals.length;index++) {
    if(state.uploaded[index]) continue;
    await upload(state.files[index].path,originals[index],{access:"private",contentType:state.files[index].type,
      handleUploadUrl:"/api/quote-storage/upload",clientPayload:JSON.stringify({id:state.id,session:state.session}),multipart:originals[index].size>5*1024*1024});
    state.uploaded[index]=true;saveSession({...state});
  }
  return post("/api/quote-storage/finalize",{id:state.id,session:state.session}) as Promise<{message:string;photoCount:number;id:string}>;
}
