'use server';

import { redirect } from 'next/navigation';

import { prisma } from '@/app/lib/prisma';
import { hashPassword } from '@/app/lib/auth/password';
import { setupSchema } from '@/app/schemas/setup-schema';

export async function createSetup(formData: FormData) {
  const payload = {
    schoolName: formData.get('schoolName')?.toString() ?? '',
    schoolCode: formData.get('schoolCode')?.toString() ?? '',
    adminName: formData.get('adminName')?.toString() ?? '',
    username: formData.get('username')?.toString() ?? '',
    password: formData.get('password')?.toString() ?? '',
    confirmPassword: formData.get('confirmPassword')?.toString() ?? '',
  };

  const parsed = setupSchema.safeParse(payload);

  if (!parsed.success) {
    throw new Error('Please provide valid setup details.');
  }

  const { data } = parsed;
  const existingSchool = await prisma.school.findFirst();

  if (existingSchool) {
    redirect('/admin');
  }

  const hashedPassword = await hashPassword(data.password);

  const school = await prisma.school.create({
    data: {
      name: data.schoolName,
      code: data.schoolCode,
    },
  });

  await prisma.user.create({
    data: {
      username: data.username,
      password: hashedPassword,
      name: data.adminName,
      role: 'ADMIN',
      schoolId: school.id,
    },
  });

  redirect('/admin');
}

