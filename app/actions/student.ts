'use server';

export type StudentActionResult = {
  success: boolean;
  message: string;
};

export async function createStudent(_formData: FormData): Promise<StudentActionResult> {
  return {
    success: true,
    message: 'Student action is ready for wiring.',
  };
}
