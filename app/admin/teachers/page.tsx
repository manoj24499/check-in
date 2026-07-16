import { Suspense } from "react";
import Link from "next/link";
import { TeacherTable } from "@/components/teacher/teacher-table";

interface PageProps {
  searchParams: Promise<{ search?: string }>;
}

export default async function TeachersPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Teachers</h1>
        <Link
          href="/admin/teachers/new"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          Add Teacher
        </Link>
      </div>

      <div className="bg-card rounded-xl border p-6">
        <Suspense fallback={<div>Loading teachers...</div>}>
          <TeacherTable search={search} />
        </Suspense>
      </div>
    </div>
  );
}
