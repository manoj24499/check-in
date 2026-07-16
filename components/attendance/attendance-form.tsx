"use client";

import { createAttendance } from "@/actions/attendance/create";

interface AttendanceFormProps {
  students: {
    id: string;
    firstName: string;
    lastName: string;
    admissionNumber: string;
  }[];
  teachers: {
    id: string;
    firstName: string;
    lastName: string;
    employeeId: string;
  }[];
}

export function AttendanceForm({ students, teachers }: AttendanceFormProps) {
  return (
    <form action={createAttendance} className="space-y-4">
      <select
        name="studentId"
        className="w-full border p-2 rounded"
        required
      >
        <option value="">Select Student</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.firstName} {student.lastName} ({student.admissionNumber})
          </option>
        ))}
      </select>

      <select
        name="teacherId"
        className="w-full border p-2 rounded"
        required
      >
        <option value="">Select Teacher</option>
        {teachers.map((teacher) => (
          <option key={teacher.id} value={teacher.id}>
            {teacher.firstName} {teacher.lastName} ({teacher.employeeId})
          </option>
        ))}
      </select>

      <select
        name="status"
        className="w-full border p-2 rounded"
        required
      >
        <option value="">Select Status</option>
        <option value="CHECKED_IN">Checked In</option>
        <option value="CHECKED_OUT">Checked Out</option>
        <option value="ABSENT">Absent</option>
      </select>

      <select
        name="verificationMethod"
        className="w-full border p-2 rounded"
        required
      >
        <option value="">Select Verification Method</option>
        <option value="MANUAL">Manual</option>
        <option value="QR">QR Code</option>
        <option value="PIN">PIN</option>
        <option value="FACE">Face Recognition</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Record Attendance
      </button>
    </form>
  );
}
