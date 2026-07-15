import { z } from "zod";

export const studentSchema = z.object({
  admissionNumber: z.string().min(1, "Admission number is required"),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),

  dateOfBirth: z.string(),

  gender: z.enum(["MALE", "FEMALE", "OTHER"]),

  grade: z.string().min(1),
  section: z.string().min(1),

  pickupPin: z.string().length(6, "PIN must be 6 digits"),
});

export type StudentSchema = z.infer<typeof studentSchema>;