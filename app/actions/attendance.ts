'use server';

export type AttendanceActionResult = {
  success: boolean;
  message: string;
};

export async function createAttendance(_formData: FormData): Promise<AttendanceActionResult> {
  return {
    success: true,
    message: 'Attendance action is ready for wiring.',
  };
}
