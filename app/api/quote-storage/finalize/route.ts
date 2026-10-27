import { NextResponse } from "next/server";
import { getIntake, privatePath, readJson, requireEnabled, requireSameOrigin, smallJson, verifyOriginal, verifySession, writeJson, IntakeError } from "@/lib/private-quote-store";
import { intakeErrorResponse } from "@/lib/private-quote-response";
import { businessDetails } from "@/lib/business";
export const runtime="nodejs";
export const maxDuration=60;
export async function POST(request:Request) {
  try {
    requireEnabled();requireSameOrigin(request);
    const body=await smallJson(request);
    if(typeof body.id!=="string"||typeof body.session!=="string") throw new IntakeError("Invalid upload session.",401);
    verifySession(body.id,body.session);
    const intake=await getIntake(body.id);
    let submitted=await readJson<{id:string;receivedAt:string}>(privatePath(intake.id,"submitted.json"));
    if(!submitted) {
      for(const file of intake.files) await verifyOriginal(file);
      submitted={id:intake.id,receivedAt:new Date().toISOString()};
      try {await writeJson(privatePath(intake.id,"submitted.json"),submitted);} catch {
        submitted=await readJson(privatePath(intake.id,"submitted.json"));
        if(!submitted) throw new Error("Submission persistence failed");
      }
    }
    const notifyPath=privatePath(intake.id,"notification.json");
    if(!await readJson(notifyPath)) {
      let locked=false;
      try {await writeJson(privatePath(intake.id,"notify-lock.json"),{at:new Date().toISOString()});locked=true;} catch { /* Another finalizer owns the notification. */ }
      if(locked) {
        let sent=false;
        try {
          const key=process.env.RESEND_API_KEY?.trim().replace(/^Bearer\s+/i,"").replace(/^["']|["']$/g,"");
          if(key&&process.env.QUOTE_FROM_EMAIL) {
            const f=intake.fields;
            const text=[`Website quote received: ${intake.id}`,`Name: ${f.name}`,`Email: ${f.email}`,`Phone: ${f.phone}`,`Property suburb: ${f.suburb}`,`Service: ${f.service}`,`How they found us: ${f.leadSource}`,`Original photos stored privately: ${intake.files.length}`,"Photos are not attached to this email.","Admin: https://www.fnspainting.com.au/quote-admin",...(intake.reference?[`Example viewed: ${intake.reference.title}`,`Example location: ${intake.reference.location}`,`Example link: https://www.fnspainting.com.au${intake.reference.path}`]:[]),"Project details:",f.details].join("\n");
            const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({from:process.env.QUOTE_FROM_EMAIL,to:[process.env.QUOTE_TO_EMAIL||businessDetails.email],reply_to:f.email,subject:`Painting quote ${intake.id} from ${f.name}`,text})});
            sent=response.ok;
          }
        } catch { /* The enquiry remains safely stored even if notification fails. */ }
        await writeJson(notifyPath,{sent,checkedAt:new Date().toISOString()});
      }
    }
    return NextResponse.json({message:`Your quote request ${intake.id} and ${intake.files.length} original photo${intake.files.length===1?"":"s"} have been received.`,photoCount:intake.files.length,id:intake.id});
  } catch(error) {return intakeErrorResponse(error);}
}
