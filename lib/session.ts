import "server-only";
import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "mission_session";
const secret = process.env.SESSION_SECRET;

function sign(value: string) {
  if (!secret) throw new Error("SESSION_SECRET が設定されていません。");
  return createHmac("sha256", secret).update(value).digest("base64url");
}

export async function setSession(uuid: string) {
  const value = `${uuid}.${sign(uuid)}`;
  const store = await cookies();
  store.set(COOKIE_NAME, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
}

export async function getSessionUuid() {
  const store = await cookies();
  const value = store.get(COOKIE_NAME)?.value;
  if (!value) return null;
  const pivot = value.lastIndexOf(".");
  if (pivot < 1) return null;
  const uuid = value.slice(0, pivot);
  const signature = value.slice(pivot + 1);
  const expected = sign(uuid);
  if (signature.length !== expected.length) return null;
  return timingSafeEqual(Buffer.from(signature), Buffer.from(expected)) ? uuid : null;
}

export async function clearSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
