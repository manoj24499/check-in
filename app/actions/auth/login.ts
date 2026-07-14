"use server";

import { redirect } from "next/navigation";
import { loginUser as loginUserService } from "@/lib/services/auth.service";

export async function loginUser(formData: FormData) {
  const username = String(formData.get("username"));
  const password = String(formData.get("password"));

  const result = await loginUserService(username, password);

  if (!result.success) {
    throw new Error(result.message);
  }

  // Redirect based on user role
  const user = result.user;
  if (user?.role === "ADMIN") {
    redirect("/admin");
  } else if (user?.role === "TEACHER") {
    redirect("/teacher");
  } else if (user?.role === "PARENT") {
    redirect("/parent");
  }

  redirect("/");
}