import { StudentForm } from "@/components/student/student-form";

interface EditStudentPageProps {
  params: {
    id: string;
  };
}

export default async function EditStudentPage({ params }: EditStudentPageProps) {
  const { id } = await params;
  
  return (
    <div className="p-8 space-y-6 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold">Edit Student</h1>
        <p className="text-muted-foreground mt-2">Update the details for student ID: {id}</p>
      </div>

      <div className="bg-card rounded-xl border p-6">
        {/* Pass initial data to form if fetched here */}
        <StudentForm studentId={id} />
      </div>
    </div>
  );
}
