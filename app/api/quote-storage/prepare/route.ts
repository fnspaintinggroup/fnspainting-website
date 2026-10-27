import { NextResponse } from "next/server";
import { createIntake, getIntake, requireEnabled, requireSameOrigin, smallJson, uploadedFiles, verifySession, IntakeError } from "@/lib/private-quote-store";
import { intakeErrorResponse } from "@/lib/private-quote-response";
import { resolveQuoteReference } from "@/lib/quote-reference";
export const runtime = "nodejs";
export async function POST(request: Request) {
  try {
    requireEnabled(); requireSameOrigin(request);
    const body = await smallJson(request);
    if (typeof body.id==="string" && typeof body.session==="string") {
      verifySession(body.id,body.session);
      const intake = await getIntake(body.id);
      return NextResponse.json({ id:intake.id, session:body.session, files:intake.files, uploaded:await uploadedFiles(intake) },{headers:{"Cache-Control":"no-store"}});
    }
    if (body.website) throw new IntakeError("Invalid enquiry.");
    const fields: Record<string,string> = {};
    for (const [key,limit] of Object.entries({name:120,email:254,phone:50,suburb:120,service:120,leadSource:120,details:15000})) fields[key]=typeof body[key]==="string"?(body[key] as string).trim().slice(0,limit):"";
    fields.name=fields.name.replace(/[\r\n]/g," ");
    if (!fields.name || !fields.details || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) throw new IntakeError("Enter your name, a valid email, and project details.");
    const kind=typeof body.referenceKind==="string"?body.referenceKind:"";
    const slug=typeof body.referenceSlug==="string"?body.referenceSlug:"";
    const reference=kind||slug?await resolveQuoteReference(kind,slug):null;
    if ((kind||slug)&&!reference) throw new IntakeError("Remove the unavailable example and try again.");
    const {intake,session}=await createIntake(request,fields,body.files,reference);
    return NextResponse.json({ id:intake.id,session,files:intake.files,uploaded:intake.files.map(()=>false) },{headers:{"Cache-Control":"no-store"}});
  } catch(error) { return intakeErrorResponse(error); }
}
