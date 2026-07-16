"use server";

import { redirect } from "next/navigation";
import { createParent as createParentService } from "@/lib/services/parent.service";

export async function createParent(formData: FormData) {
  await createParentService({
    username: String(formData.get("username")),
    password: String(formData.get("password")),
    name: String(formData.get("name")),
    phone: formData.get("phone") ? String(formData.get("phone")) : undefined,
    schoolId: "86f11074-2e62-4dab-8fe8-a7b3d06923f5", // Temporary
  });

  redirect("/admin/parents");
}
