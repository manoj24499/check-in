"use server";

import { redirect } from "next/navigation";
import { deleteParent as deleteParentService } from "@/lib/services/parent.service";

export async function deleteParent(formData: FormData) {
  const id = String(formData.get("id"));

  await deleteParentService(id);

  redirect("/admin/parents");
}
