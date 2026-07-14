'use server';

import { redirect } from 'next/navigation';

import { prisma } from '@/app/lib/prisma';
import { hashPassword } from '@/app/lib/password';
import { setupSchema } from '@/app/schemas/setup-schema';

export async function createSetup(formData: FormData) {
  const payload = {
    schoolName: formData.get('schoolName')?.toString() ?? '',
    schoolAddress: formData.get('schoolAddress')?.toString() ?? '',
    schoolPhone: formData.get('schoolPhone')?.toString() ?? '',
    schoolEmail: formData.get('schoolEmail')?.toString() ?? '',
    adminName: formData.get('adminName')?.toString() ?? '',
    adminUsername: formData.get('adminUsername')?.toString() ?? '',
    adminPassword: formData.get('adminPassword')?.toString() ?? '',
    adminPhone: formData.get('adminPhone')?.toString() ?? '',
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

  const hashedPassword = await hashPassword(data.adminPassword);

  await prisma.$transaction(async (tx) => {
    await tx.school.create({
      data: {
        name: data.schoolName,
        address: data.schoolAddress || null,
        phone: data.schoolPhone || null,
        email: data.schoolEmail || null,
      },
    });

    await tx.user.create({
      data: {
        username: data.adminUsername,
        password: hashedPassword,
        name: data.adminName,
        phone: data.adminPhone || null,
        role: 'ADMIN',
      },
    });
  });

  redirect('/admin');
}
