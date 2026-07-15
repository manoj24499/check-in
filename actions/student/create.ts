"use server";

import { revalidatePath } from "next/cache";

export type ActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function createStudent(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  try {
    // Implement create logic here
    console.log("Creating student:", Object.fromEntries(formData.entries()));
    
    revalidatePath("/admin/students");
    return { success: true, message: "Student created successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to create student" };
  }
}
