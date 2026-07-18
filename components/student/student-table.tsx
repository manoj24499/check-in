import Link from "next/link";
import { getStudents } from "@/lib/services/student.service";
import { deleteStudent } from "@/actions/student/delete";

export async function StudentTable({ search }: { search?: string }) {
  const students = await getStudents(search);

  if (students.length === 0) {
    return (
      <div className="text-center p-8 text-muted-foreground">
        No students found.
      </div>
    );
  }

  return (
    <div className="w-full overflow-auto">
      <form className="mb-6">
        <input
          type="text"
          name="search"
          placeholder="Search students..."
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
            <th className="p-3 font-medium">Admission #</th>
            <th className="p-3 font-medium">Grade/Sec</th>
            <th className="p-3 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b hover:bg-muted/50">
              <td className="p-3">
                {student.firstName} {student.lastName}
              </td>
              <td className="p-3">{student.admissionNumber}</td>
              <td className="p-3">
                {student.grade} - {student.section}
              </td>
              <td className="p-3 text-right">
                <Link
                  href={`/admin/students/${student.id}/edit`}
                  className="text-primary hover:underline text-sm"
                >
                  Edit
                </Link>
                <Link
                  href={`/admin/students/${student.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {student.firstName} {student.lastName}
                </Link>
                <form action={deleteStudent}>
                  <input type="hidden" name="id" value={student.id} />

                  <button className="text-red-600" type="submit">
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
