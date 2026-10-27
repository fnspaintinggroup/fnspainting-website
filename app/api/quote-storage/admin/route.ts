import { NextResponse } from "next/server";
import { acknowledgeArchive,getIntake,purgeArchived,requireAdmin,requireEnabled,smallJson,submittedIntakes,IntakeError } from "@/lib/private-quote-store";
import { intakeErrorResponse } from "@/lib/private-quote-response";
export const runtime="nodejs";
export const maxDuration=60;
export async function GET(request:Request) {
  try {requireEnabled();requireAdmin(request);return NextResponse.json({requests:await submittedIntakes()},{headers:{"Cache-Control":"no-store"}});}
  catch(error){return intakeErrorResponse(error);}
}
export async function POST(request:Request) {
  try {
    requireEnabled();requireAdmin(request);
    const body=await smallJson(request);
    if(typeof body.id!=="string") throw new IntakeError("Invalid request reference.");
    const intake=await getIntake(body.id);
    if(body.action==="acknowledge") return NextResponse.json(await acknowledgeArchive(intake,body.files));
    if(body.action==="purge") return NextResponse.json(await purgeArchived(intake,body.files));
    throw new IntakeError("Invalid archive action.");
  } catch(error){return intakeErrorResponse(error);}
}
