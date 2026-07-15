import { randomUUID } from "crypto";
import { prisma } from "@/lib/prisma";

const SESSION_DURATION = 1000 * 60 * 60 * 24 * 7; // 7 days

export async function createSession(userId: string) {
  const token = randomUUID();

  const expiresAt = new Date(Date.now() + SESSION_DURATION);

  await prisma.session.create({
    data: {
      token,
      userId,
      expiresAt,
    },
  });

  return token;
}

export async function getSession(token: string) {
  return prisma.session.findUnique({
    where: {
      token,
    },
    include: {
      user: true,
    },
  });
}

export async function deleteSession(token: string) {
  await prisma.session.deleteMany({
    where: {
      token,
    },
  });
}