"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { loginUser as loginUserService } from "@/lib/services/auth.service";
import { createSession } from "@/lib/services/session.service";

export async function loginUser(formData: FormData) {
  const username = String(formData.get("username"));
  const password = String(formData.get("password"));

  const result = await loginUserService(username, password);

  if (!result.success) {
    throw new Error(result.message);
  }

  if (!result.user) {
    throw new Error("User not found");
  }

  const token = await createSession(result.user.id);

  const cookieStore = await cookies();

  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  // redirect("/admin");
  switch (result.user.role) {
    case "ADMIN":
      redirect("/admin");

    case "TEACHER":
      redirect("/teacher/dashboard");

    case "PARENT":
      redirect("/parent/dashboard");

    default:
      redirect("/login");
  }
}
