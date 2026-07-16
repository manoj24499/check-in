"use server";

import { redirect } from "next/navigation";
import { updateParent as updateParentService } from "@/lib/services/parent.service";

export async function updateParent(formData: FormData) {
  const id = String(formData.get("id"));

  await updateParentService(id, {
    name: String(formData.get("name")),
    phone: formData.get("phone") ? String(formData.get("phone")) : undefined,
  });

  redirect("/admin/parents");
}
