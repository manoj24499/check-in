import { StudentForm } from "@/components/student/student-form";

export default function NewStudentPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">
        Add Student
      </h1>

      <StudentForm />
    </div>
  );
}