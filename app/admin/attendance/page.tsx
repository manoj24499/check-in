import { Suspense } from "react";
import Link from "next/link";
import { AttendanceTable } from "@/components/attendance/attendance-table";

export default async function AttendancePage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Attendance</h1>
        <Link
          href="/admin/attendance/new"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          Record Attendance
        </Link>
      </div>

      <div className="bg-card rounded-xl border p-6">
        <Suspense fallback={<div>Loading attendance records...</div>}>
          <AttendanceTable />
        </Suspense>
      </div>
    </div>
  );
}
