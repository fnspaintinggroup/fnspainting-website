import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { getIntake, privatePath, readJson, requireEnabled, requireSameOrigin, smallJson, verifySession, IntakeError } from "@/lib/private-quote-store";
import { intakeErrorResponse } from "@/lib/private-quote-response";
export const runtime="nodejs";
export async function POST(request: Request) {
  try {
    requireEnabled();
    const body=await smallJson(request);
    const response=await handleUpload({body:body as unknown as HandleUploadBody,request,
      onBeforeGenerateToken:async(pathname,payload)=>{
        requireSameOrigin(request);
        const input=JSON.parse(payload||"{}");
        if(typeof input.id!=="string"||typeof input.session!=="string") throw new IntakeError("Invalid upload session.",401);
        verifySession(input.id,input.session);
        if(await readJson(privatePath(input.id,"submitted.json"))) throw new IntakeError("This enquiry has already been received.",409);
        const intake=await getIntake(input.id);
        const file=intake.files.find(f=>f.path===pathname);
        if(!file) throw new IntakeError("This upload path is not permitted.",403);
        return {allowedContentTypes:[file.type],maximumSizeInBytes:file.size,validUntil:Date.now()+15*60*1000,addRandomSuffix:false,allowOverwrite:false,cacheControlMaxAge:0};
      },
    });
    return Response.json(response);
  } catch(error) { return intakeErrorResponse(error); }
}
