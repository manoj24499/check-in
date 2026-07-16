import { notFound } from "next/navigation";
import { getTeacherById } from "@/lib/services/teacher.service";
import { TeacherForm } from "@/components/teacher/teacher-form";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditTeacherPage({ params }: PageProps) {
  const { id } = await params;

  const teacher = await getTeacherById(id);

  if (!teacher) {
    notFound();
  }

  return (
    <div className="max-w-3xl p-8">
      <h1 className="text-3xl font-bold mb-6">
        Edit Teacher
      </h1>

      <TeacherForm teacher={teacher} />
    </div>
  );
}
