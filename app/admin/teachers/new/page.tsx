import { TeacherForm } from "@/components/teacher/teacher-form";

export default function NewTeacherPage() {
  return (
    <div className="max-w-3xl p-8">
      <h1 className="text-3xl font-bold mb-6">
        Add Teacher
      </h1>

      <TeacherForm />
    </div>
  );
}
