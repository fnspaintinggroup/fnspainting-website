import { NextResponse } from "next/server";
import { intakeEnabled, ORIGINAL_LIMIT, PHOTO_LIMIT } from "@/lib/private-quote-store";
export function GET() {
  return NextResponse.json({ enabled: intakeEnabled(), maxPhotoBytes: ORIGINAL_LIMIT, maxPhotos: PHOTO_LIMIT },{headers:{"Cache-Control":"no-store"}});
}
