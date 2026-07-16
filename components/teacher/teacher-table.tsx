import Link from "next/link";
import { getTeachers } from "@/lib/services/teacher.service";
import { deleteTeacher } from "@/actions/teacher/delete";

export async function TeacherTable({ search }: { search?: string }) {
  const teachers = await getTeachers(search);

  if (teachers.length === 0) {
    return (
      <div className="text-center p-8 text-muted-foreground">
        No teachers found.
      </div>
    );
  }

  return (
    <div className="w-full overflow-auto">
      <form className="mb-6">
        <input
          type="text"
          name="search"
          placeholder="Search teachers..."
          defaultValue={search}
          className="border rounded px-3 py-2 w-80"
        />

        <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-3 font-medium">Name</th>
            <th className="p-3 font-medium">Employee ID</th>
            <th className="p-3 font-medium">Subject</th>
            <th className="p-3 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id} className="border-b hover:bg-muted/50">
              <td className="p-3">
                {teacher.firstName} {teacher.lastName}
              </td>
              <td className="p-3">{teacher.employeeId}</td>
              <td className="p-3">
                {teacher.subject || "N/A"}
              </td>
              <td className="p-3 text-right">
                <Link
                  href={`/admin/teachers/${teacher.id}/edit`}
                  className="text-primary hover:underline text-sm"
                >
                  Edit
                </Link>
                <form action={deleteTeacher} className="inline-block ml-2">
                  <input type="hidden" name="id" value={teacher.id} />
                  <button className="text-red-600 hover:underline text-sm" type="submit">
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
