'use server';

import { redirect } from 'next/navigation';
import { loginSchema } from '@/app/schemas/login-schema';

export async function loginUser(formData: FormData): Promise<void> {
  const payload = {
    username: formData.get('username')?.toString() ?? '',
    password: formData.get('password')?.toString() ?? '',
  };

  const parsed = loginSchema.safeParse(payload);

  if (!parsed.success) {
    throw new Error('Invalid username or password.');
  }

  // TODO: Implement login logic with Prisma and authentication
  // For now, redirect to dashboard as placeholder
  redirect('/admin');
}

