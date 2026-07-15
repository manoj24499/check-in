import { cookies } from "next/headers";
import { getSession } from "@/lib/services/session.service";

export async function getCurrentUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get("session")?.value;

  if (!token) return null;

  const session = await getSession(token);

  if (!session) return null;

  if (session.expiresAt < new Date()) {
    return null;
  }

  return session.user;
}