'use server';

export type LoginActionResult = {
  success: boolean;
  message: string;
};

export async function loginUser(_formData: FormData): Promise<LoginActionResult> {
  return {
    success: true,
    message: 'Login action is ready for wiring.',
  };
}
