import { get } from "@vercel/blob";
import { getIntake,privatePath,readJson,requireAdmin,requireEnabled,IntakeError } from "@/lib/private-quote-store";
import { intakeErrorResponse } from "@/lib/private-quote-response";
export const runtime="nodejs";
export const maxDuration=60;
export async function GET(request:Request) {
  try {
    requireEnabled();requireAdmin(request);
    const params=new URL(request.url).searchParams;
    const id=params.get("id")||"",index=Number(params.get("index"));
    const intake=await getIntake(id);
    if(!await readJson(privatePath(id,"submitted.json"))) throw new IntakeError("Request not submitted.",409);
    const file=Number.isInteger(index)&&index>=0?intake.files[index]:null;
    if(!file) throw new IntakeError("Photo not found.",404);
    const result=await get(file.path,{access:"private",useCache:false});
    if(!result||result.statusCode!==200) throw new IntakeError("Photo is no longer stored online.",404);
    // Stream originals instead of buffering a response above the platform body limit.
    return new Response(result.stream,{headers:{"Content-Type":file.type,"Content-Disposition":`attachment; filename="${id}-photo-${index+1}.${file.path.split('.').pop()}"`,"Cache-Control":"private, no-store","X-Content-Type-Options":"nosniff"}});
  } catch(error){return intakeErrorResponse(error);}
}
