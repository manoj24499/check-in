import { Suspense } from "react";
import Link from "next/link";
import { StudentTable } from "@/components/student/student-table";
import { StudentSearch } from "@/components/student/student-search";

export default function StudentsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Students</h1>
        <Link 
          href="/admin/students/new" 
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          Add Student
        </Link>
      </div>

      <div className="bg-card rounded-xl border p-6">
        <div className="mb-6">
          <StudentSearch />
        </div>
        
        <Suspense fallback={<div>Loading students...</div>}>
          <StudentTable />
        </Suspense>
      </div>
    </div>
  );
}
