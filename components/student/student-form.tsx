"use client";
import { createStudent } from "@/actions/student/create";
import { updateStudent } from "@/actions/student/update";

interface StudentFormProps {
  student?: {
    id: string;
    admissionNumber: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: "MALE" | "FEMALE" | "OTHER";
    grade: string;
    section: string;
    pickupPin: string;
  };
}

export function StudentForm({ student }: StudentFormProps) {
  return (
    <form
      action={student ? updateStudent : createStudent}
      className="space-y-4"
    >
      {student && <input type="hidden" name="id" value={student.id} />}

      <input
        name="admissionNumber"
        placeholder="Admission Number"
        defaultValue={student?.admissionNumber}
        className="w-full border p-2 rounded"
      />

      <input
        name="firstName"
        placeholder="First Name"
        defaultValue={student?.firstName}
        className="w-full border p-2 rounded"
      />

      <input
        name="lastName"
        placeholder="Last Name"
        defaultValue={student?.lastName}
        className="w-full border p-2 rounded"
      />

      <input
        type="date"
        name="dateOfBirth"
        defaultValue={
          student?.dateOfBirth
            ? new Date(student.dateOfBirth).toISOString().split("T")[0]
            : ""
        }
        className="w-full border p-2 rounded"
      />

      <select
        name="gender"
        defaultValue={student?.gender}
        className="w-full border p-2 rounded"
      >
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="OTHER">Other</option>
      </select>

      <input
        name="grade"
        placeholder="Grade"
        defaultValue={student?.grade}
        className="w-full border p-2 rounded"
      />

      <input
        name="section"
        placeholder="Section"
        defaultValue={student?.section}
        className="w-full border p-2 rounded"
      />

      <input
        name="pickupPin"
        placeholder="Pickup PIN"
        defaultValue={student?.pickupPin}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {student ? "Update Student" : "Create Student"}
      </button>
    </form>
  );
}
