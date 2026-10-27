import { createHash, createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { del, get, head, list, put } from "@vercel/blob";

export const PREFIX = "quote-intake/v1/";
export const ORIGINAL_LIMIT = 20 * 1024 * 1024;
export const PHOTO_LIMIT = 5;
const STORE_CEILING = 512 * 1024 * 1024;
const sydneyDate = () => new Intl.DateTimeFormat("en-CA",{timeZone:"Australia/Sydney",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
export const RETENTION_MS = 7 * 24 * 60 * 60 * 1000;
export type IntakeFile = { name: string; size: number; type: string; sha256: string; path: string };
export type Intake = {
  id: string; createdAt: string; fields: Record<string, string>; files: IntakeFile[];
  reference?: { title: string; location: string; path: string } | null;
};
export type ArchiveReceipt = { savedAt: string; files: { size: number; sha256: string }[] };
export class IntakeError extends Error { constructor(message: string, public status = 400) { super(message); } }
export function intakeEnabled() {
  return process.env.QUOTE_PRIVATE_UPLOADS_ENABLED === "1"
    && Boolean(process.env.BLOB_READ_WRITE_TOKEN)
    && (process.env.QUOTE_INTAKE_SECRET?.length || 0) >= 32
    && (process.env.QUOTE_ARCHIVE_KEY?.length || 0) >= 32;
}
export function requireEnabled() { if (!intakeEnabled()) throw new IntakeError("Private photo intake is not connected yet.", 503); }
export function privatePath(id: string, suffix: string) {
  if (!/^Q-\d{8}-[a-f0-9-]{36}$/.test(id)) throw new IntakeError("Invalid request reference.");
  return `${PREFIX}requests/${id}/${suffix}`;
}
function same(left: string, right: string) {
  const a = Buffer.from(left), b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}
function signature(value: string) {
  const secret = process.env.QUOTE_INTAKE_SECRET;
  if (!secret || secret.length < 32) throw new IntakeError("Intake is not configured.", 503);
  return createHmac("sha256", secret).update(value).digest("hex");
}
export function sessionToken(id: string, now = Date.now()) {
  const payload = Buffer.from(JSON.stringify({ id, expires: now + 2 * 60 * 60 * 1000 })).toString("base64url");
  return payload + "." + signature(payload);
}
export function verifySession(id: string, token: string, now = Date.now()) {
  if (token.length > 1024) throw new IntakeError("Invalid upload session.", 401);
  const parts = token.split(".");
  if (parts.length !== 2 || !same(signature(parts[0]), parts[1])) throw new IntakeError("Invalid upload session.", 401);
  try {
    const value = JSON.parse(Buffer.from(parts[0], "base64url").toString());
    if (value.id !== id || typeof value.expires !== "number" || value.expires < now) throw new Error();
  } catch { throw new IntakeError("Upload session expired. Please restart the request.", 401); }
}
export function requireSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) throw new IntakeError("Please submit from this website.", 403);
}
export function requireAdmin(request: Request) {
  const key = process.env.QUOTE_ARCHIVE_KEY;
  if (!key || key.length < 32) throw new IntakeError("Archive access is not configured.", 503);
  if (!same(request.headers.get("authorization") || "", "Bearer " + key)) throw new IntakeError("Administrator sign-in required.", 401);
}
export async function smallJson(request: Request): Promise<Record<string, unknown>> {
  if (Number(request.headers.get("content-length")) > 65536) throw new IntakeError("Request is too large.", 413);
  const body = await request.text();
  if (Buffer.byteLength(body) > 65536) throw new IntakeError("Request is too large.", 413);
  try {
    const value = JSON.parse(body);
    if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error();
    return value;
  } catch { throw new IntakeError("The request could not be read."); }
}
export async function readJson<T>(path: string): Promise<T | null> {
  const result = await get(path, { access: "private", useCache: false });
  if (!result || result.statusCode !== 200) return null;
  return JSON.parse(await new Response(result.stream).text()) as T;
}
export async function writeJson(path: string, value: unknown, overwrite = false) {
  await put(path, JSON.stringify(value), { access: "private", contentType: "application/json", addRandomSuffix: false, allowOverwrite: overwrite, cacheControlMaxAge: 0 });
}
export async function allBlobs(prefix = PREFIX) {
  const blobs = [];
  let cursor: string | undefined;
  do {
    const page = await list({ prefix, limit: 1000, cursor });
    blobs.push(...page.blobs);
    if (blobs.length > 10000) throw new IntakeError("Archive review required before more uploads.", 503);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  return blobs;
}
export function validateFiles(input: unknown, id: string): IntakeFile[] {
  if (!Array.isArray(input) || input.length > PHOTO_LIMIT) throw new IntakeError("Choose up to 5 photos.");
  const types: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/heic": "heic", "image/heif": "heif" };
  return input.map((item, index) => {
    if (!item || typeof item !== "object" || !Number.isSafeInteger(item.size) || item.size <= 0 || item.size > ORIGINAL_LIMIT
      || typeof item.type !== "string" || !types[item.type] || typeof item.sha256 !== "string" || !/^[a-f0-9]{64}$/.test(item.sha256)) {
      throw new IntakeError("Each photo must be JPG, PNG, WebP or HEIC, up to 20 MB.");
    }
    return { name: String(item.name || "photo").slice(0, 160), size: item.size, type: item.type, sha256: item.sha256,
      path: privatePath(id, `photos/${index + 1}.${types[item.type]}`) };
  });
}
export async function createIntake(request: Request, fields: Record<string, string>, inputFiles: unknown, reference: Intake["reference"]) {
  requireEnabled();
  const id = "Q-" + sydneyDate().replaceAll("-", "") + "-" + randomUUID();
  const files = validateFiles(inputFiles, id);
  const blobs = await allBlobs();
  let reserved = 0;
  for (const blob of blobs.filter(b=>b.pathname.endsWith("/manifest.json"))) {
    const prior=await readJson<Intake>(blob.pathname);
    if(prior&&!await readJson(privatePath(prior.id,"purged.json"))) reserved+=prior.files.reduce((sum,f)=>sum+f.size,0);
  }
  const metadataBytes=blobs.filter(b=>!b.pathname.includes("/photos/")).reduce((sum,b)=>sum+b.size,0);
  if (reserved + metadataBytes + files.reduce((sum, f) => sum + f.size, 0) > STORE_CEILING) {
    throw new IntakeError("Photo storage is temporarily full. Please call us.", 503);
  }
  // Persist rate-limit claims in private storage; never store the original IP address.
  const ip = request.headers.get("x-vercel-forwarded-for") || request.headers.get("x-forwarded-for") || "unknown";
  const day = sydneyDate();
  const ipHash = signature(ip).slice(0, 32);
  let claimed = false;
  for (let slot = 0; slot < 5; slot++) {
    const path = `${PREFIX}limits/${day}/${ipHash}-${slot}.json`;
    if (blobs.some((b) => b.pathname === path)) continue;
    try { await writeJson(path, { createdAt: new Date().toISOString() }); claimed = true; break; }
    catch { /* A competing request may already have claimed this slot. */ }
  }
  if (!claimed) throw new IntakeError("Too many requests today. Please call us.", 429);
  const intake: Intake = { id, createdAt: new Date().toISOString(), fields, files, reference };
  await writeJson(privatePath(id, "manifest.json"), intake);
  return { intake, session: sessionToken(id) };
}
export async function getIntake(id: string) {
  const intake = await readJson<Intake>(privatePath(id, "manifest.json"));
  if (!intake) throw new IntakeError("Request not found.", 404);
  return intake;
}
export async function uploadedFiles(intake: Intake) {
  return Promise.all(intake.files.map(async (file) => {
    try { const blob = await head(file.path); return blob.size === file.size; }
    catch { return false; }
  }));
}
export function imageHeaderMatches(bytes: Buffer, type: string) {
  if (type === "image/jpeg") return bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
  if (type === "image/png") return bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]));
  if (type === "image/webp") return bytes.toString("ascii",0,4)==="RIFF" && bytes.toString("ascii",8,12)==="WEBP";
  return bytes.toString("ascii",4,8)==="ftyp" && /hei[cf]|heix|hevc|hevx/.test(bytes.toString("ascii",8,80));
}
export async function verifyOriginal(file: IntakeFile) {
  const value = await get(file.path, { access: "private", useCache: false });
  if (!value || value.statusCode !== 200 || value.blob.size !== file.size) throw new IntakeError("Some photos have not finished uploading.", 409);
  const reader = value.stream.getReader();
  const hash = createHash("sha256"); let size = 0; let header = Buffer.alloc(0);
  while (true) {
    const item = await reader.read(); if (item.done) break;
    size += item.value.length;
    if (size > ORIGINAL_LIMIT || size > file.size) { await reader.cancel(); throw new IntakeError("Invalid photo size."); }
    if (header.length < 80) header = Buffer.concat([header, Buffer.from(item.value)]).subarray(0,80);
    hash.update(item.value);
  }
  if (size !== file.size || hash.digest("hex") !== file.sha256 || !imageHeaderMatches(header,file.type)) throw new IntakeError("A photo failed verification. Please select the original again.",409);
}
export async function submittedIntakes() {
  const blobs = await allBlobs(PREFIX + "requests/");
  const rows = [];
  for (const blob of blobs.filter((b) => b.pathname.endsWith("/submitted.json"))) {
    const entry = await readJson<{ id: string; receivedAt: string }>(blob.pathname);
    if (!entry) continue;
    const intake = await getIntake(entry.id);
    const archive = await readJson<ArchiveReceipt>(privatePath(entry.id,"archive.json"));
    const purged = await readJson<{ deletedAt: string }>(privatePath(entry.id,"purged.json"));
    const notification=await readJson<{sent:boolean}>(privatePath(entry.id,"notification.json"));
    rows.push({ ...intake, receivedAt: entry.receivedAt, archive, purged, notification });
  }
  return rows.sort((a,b)=>b.createdAt.localeCompare(a.createdAt));
}
export async function acknowledgeArchive(intake: Intake, files: unknown, now = Date.now()) {
  if (!await readJson(privatePath(intake.id,"submitted.json"))) throw new IntakeError("The enquiry has not been submitted.",409);
  if (!Array.isArray(files) || files.length !== intake.files.length || files.some((f,i)=>!f || f.size!==intake.files[i].size || f.sha256!==intake.files[i].sha256)) throw new IntakeError("PC file verification did not match.",409);
  const existing = await readJson<ArchiveReceipt>(privatePath(intake.id,"archive.json"));
  if (existing) return existing;
  const receipt = { savedAt: new Date(now).toISOString(), files: intake.files.map(({size,sha256})=>({size,sha256})) };
  await writeJson(privatePath(intake.id,"archive.json"), receipt);
  return receipt;
}
export async function purgeArchived(intake: Intake, files: unknown, now = Date.now()) {
  const archive = await readJson<ArchiveReceipt>(privatePath(intake.id,"archive.json"));
  if (!archive || now - Date.parse(archive.savedAt) < RETENTION_MS) throw new IntakeError("PC verification plus the seven-day waiting period is required.",409);
  if (!Array.isArray(files) || files.length!==intake.files.length || files.some((f,i)=>!f || f.size!==intake.files[i].size || f.sha256!==intake.files[i].sha256)) throw new IntakeError("Recheck the current PC copies before deleting.",409);
  for (const file of intake.files) await del(file.path);
  await writeJson(privatePath(intake.id,"purged.json"), { deletedAt: new Date(now).toISOString(), photoCount: intake.files.length }, true);
  return { deleted: intake.files.length };
}
