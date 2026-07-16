"use server";

import { redirect } from "next/navigation";
import { createParent as createParentService } from "@/lib/services/parent.service";
import { getCurrentUser } from "@/lib/auth";

export async function createParent(formData: FormData) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  await createParentService({
    username: String(formData.get("username")),
    password: String(formData.get("password")),
    name: String(formData.get("name")),
    phone: formData.get("phone") ? String(formData.get("phone")) : undefined,
    schoolId: currentUser.schoolId,
  });

  redirect("/admin/parents");
}
