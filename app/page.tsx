import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Home() {
  const school = await prisma.school.findFirst();

  if (!school) {
    redirect("/setup");
  }

  redirect("/login");
}