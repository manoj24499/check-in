import { z } from 'zod';

export const setupSchema = z.object({
  schoolName: z.string().trim().min(2, 'School name is required.'),
  schoolAddress: z.string().trim().optional().or(z.literal('')),
  schoolPhone: z.string().trim().optional().or(z.literal('')),
  schoolEmail: z.string().trim().email('Enter a valid email address.').optional().or(z.literal('')),
  adminName: z.string().trim().min(2, 'Admin name is required.'),
  adminUsername: z.string().trim().min(3, 'Admin username must be at least 3 characters.'),
  adminPassword: z.string().min(6, 'Password must be at least 6 characters.'),
  adminPhone: z.string().trim().optional().or(z.literal('')),
});

export type SetupFormValues = z.infer<typeof setupSchema>;
