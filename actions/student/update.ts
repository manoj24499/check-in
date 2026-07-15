"use server";

import { revalidatePath } from "next/cache";

export type ActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function updateStudent(id: string, prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  try {
    // Implement update logic here
    console.log(`Updating student ${id}:`, Object.fromEntries(formData.entries()));
    
    revalidatePath("/admin/students");
    revalidatePath(`/admin/students/${id}/edit`);
    return { success: true, message: "Student updated successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to update student" };
  }
}
