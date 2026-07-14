import { NextResponse } from "next/server";
import { createSession, verifySession } from "@/lib/session";

export async function GET() {
  const token = await createSession({
    userId: "123",
    role: "ADMIN",
  });

  const payload = await verifySession(token);

  return NextResponse.json({
    token,
    payload,
  });
}