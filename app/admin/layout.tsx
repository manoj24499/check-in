import { ReactNode } from "react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">
          School Check-In
        </h2>

        <nav className="space-y-3">
          <Link
            href="/admin"
            className="block rounded-lg px-3 py-2 hover:bg-slate-800"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/students"
            className="block rounded-lg px-3 py-2 hover:bg-slate-800"
          >
            Students
          </Link>

          <Link
            href="/admin/teachers"
            className="block rounded-lg px-3 py-2 hover:bg-slate-800"
          >
            Teachers
          </Link>

          <Link
            href="/admin/parents"
            className="block rounded-lg px-3 py-2 hover:bg-slate-800"
          >
            Parents
          </Link>

          <Link
            href="/admin/attendance"
            className="block rounded-lg px-3 py-2 hover:bg-slate-800"
          >
            Attendance
          </Link>

          <Link
            href="/admin/settings"
            className="block rounded-lg px-3 py-2 hover:bg-slate-800"
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8">
        {children}
      </main>
    </div>
  );
}