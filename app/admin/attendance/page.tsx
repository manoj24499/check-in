import { Suspense } from "react";
import Link from "next/link";
import { AttendanceTable } from "@/components/attendance/attendance-table";

export default async function AttendancePage() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Attendance</h1>

      <div className="flex gap-2">
        <Link
          href="/admin/attendance/scan"
          className="bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Scan QR
        </Link>

        <Link
          href="/admin/attendance/new"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
        >
          Record Attendance
        </Link>
      </div>
    </div>
  );
}
