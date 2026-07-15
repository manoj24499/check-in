import { z } from "zod";

export const studentSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  admissionNumber: z.string().min(1, "Admission number is required"),
  dateOfBirth: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Valid date of birth is required",
  }),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]),
  grade: z.string().min(1, "Grade is required"),
  section: z.string().min(1, "Section is required"),
  pickupPin: z.string().min(4, "Pickup PIN must be at least 4 characters"),
});

export type StudentFormValues = z.infer<typeof studentSchema>;
