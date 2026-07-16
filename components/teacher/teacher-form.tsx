"use client";
import { createTeacher } from "@/actions/teacher/create";
import { updateTeacher } from "@/actions/teacher/update";

interface TeacherFormProps {
  teacher?: {
    id: string;
    employeeId: string;
    firstName: string;
    lastName: string;
    email: string | null;
    phone: string | null;
    subject: string | null;
  };
}

export function TeacherForm({ teacher }: TeacherFormProps) {
  return (
    <form
      action={teacher ? updateTeacher : createTeacher}
      className="space-y-4"
    >
      {teacher && <input type="hidden" name="id" value={teacher.id} />}

      <input
        name="employeeId"
        placeholder="Employee ID"
        defaultValue={teacher?.employeeId}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="firstName"
        placeholder="First Name"
        defaultValue={teacher?.firstName}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="lastName"
        placeholder="Last Name"
        defaultValue={teacher?.lastName}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        defaultValue={teacher?.email || ""}
        className="w-full border p-2 rounded"
      />

      <input
        name="phone"
        placeholder="Phone"
        defaultValue={teacher?.phone || ""}
        className="w-full border p-2 rounded"
      />

      <input
        name="subject"
        placeholder="Subject"
        defaultValue={teacher?.subject || ""}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {teacher ? "Update Teacher" : "Create Teacher"}
      </button>
    </form>
  );
}
