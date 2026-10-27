import { NextResponse } from "next/server";
import { IntakeError } from "@/lib/private-quote-store";
export function intakeErrorResponse(error: unknown) {
  if (error instanceof IntakeError) return NextResponse.json({message:error.message},{status:error.status,headers:{"Cache-Control":"no-store"}});
  console.error("Private quote storage request failed");
  return NextResponse.json({message:"Photo intake is temporarily unavailable. Please try again or call us."},{status:503});
}
