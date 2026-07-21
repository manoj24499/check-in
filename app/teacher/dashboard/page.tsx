import Link from "next/link";

export default function TeacherDashboard() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome! Manage attendance and scan student QR codes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/teacher/scan"
          className="border rounded-xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">📷 Scan QR</h2>
          <p className="mt-2 text-sm text-gray-500">
            Scan student QR codes for attendance.
          </p>
        </Link>

        <Link
          href="/teacher/attendance"
          className="border rounded-xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">📋 Attendance</h2>
          <p className="mt-2 text-sm text-gray-500">
            View todays attendance records.
          </p>
        </Link>

        <Link
          href="/teacher/profile"
          className="border rounded-xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">👤 Profile</h2>
          <p className="mt-2 text-sm text-gray-500">
            View your teacher profile.
          </p>
        </Link>
      </div>
    </div>
  );
}
