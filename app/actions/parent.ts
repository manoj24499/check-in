'use server';

export type ParentActionResult = {
  success: boolean;
  message: string;
};

export async function createParent(_formData: FormData): Promise<ParentActionResult> {
  return {
    success: true,
    message: 'Parent action is ready for wiring.',
  };
}
