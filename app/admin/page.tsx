import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { getDashboardStats } from "@/lib/services/dashboard.service";

export default async function AdminPage() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/login");
  }

  const stats = await getDashboardStats();

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Welcome, {currentUser.name}</h1>

        <p className="text-gray-500">School Administration Dashboard</p>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <div className="border rounded-xl p-5">
          <h2>Students</h2>
          <p className="text-3xl font-bold">{stats.totalStudents}</p>
        </div>

        <div className="border rounded-xl p-5">
          <h2>Teachers</h2>
          <p className="text-3xl font-bold">{stats.totalTeachers}</p>
        </div>

        <div className="border rounded-xl p-5">
          <h2>Parents</h2>
          <p className="text-3xl font-bold">{stats.totalParents}</p>
        </div>

        <div className="border rounded-xl p-5">
          <h2>Checked In</h2>
          <p className="text-3xl font-bold">{stats.checkedInToday}</p>
        </div>

        <div className="border rounded-xl p-5">
          <h2>Checked Out</h2>
          <p className="text-3xl font-bold">{stats.checkedOutToday}</p>
        </div>
      </div>
    </div>
  );
}
