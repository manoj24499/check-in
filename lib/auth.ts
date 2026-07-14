import type { Session } from 'next-auth';

export async function getCurrentUser(): Promise<Session | null> {
  return null;
}
