import { StudentForm } from "@/components/student/student-form";

export default function NewStudentPage() {
  return (
    <div className="p-8 space-y-6 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold">Add New Student</h1>
        <p className="text-muted-foreground mt-2">Enter the details of the new student below.</p>
      </div>

      <div className="bg-card rounded-xl border p-6">
        <StudentForm />
      </div>
    </div>
  );
}
