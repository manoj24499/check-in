import Link from "next/link";
import { getParents } from "@/lib/services/parent.service";
import { deleteParent } from "@/actions/parent/delete";

export async function ParentTable({ search }: { search?: string }) {
  const parents = await getParents(search);

  if (parents.length === 0) {
    return (
      <div className="text-center p-8 text-muted-foreground">
        No parents found.
      </div>
    );
  }

  return (
    <div className="w-full overflow-auto">
      <form className="mb-6">
        <input
          type="text"
          name="search"
          placeholder="Search parents..."
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
            <th className="p-3 font-medium">Username</th>
            <th className="p-3 font-medium">Phone</th>
            <th className="p-3 font-medium">Students</th>
            <th className="p-3 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {parents.map((parent) => (
            <tr key={parent.id} className="border-b hover:bg-muted/50">
              <td className="p-3">{parent.name}</td>
              <td className="p-3">{parent.username}</td>
              <td className="p-3">{parent.phone ?? "—"}</td>
              <td className="p-3">
                {parent.parentStudents
                  .map((ps) => `${ps.student.firstName} ${ps.student.lastName}`)
                  .join(", ") || "—"}
              </td>
              <td className="p-3 text-right">
                <Link
                  href={`/admin/parents/${parent.id}/edit`}
                  className="text-primary hover:underline text-sm"
                >
                  Edit
                </Link>
                <form action={deleteParent}>
                  <input type="hidden" name="id" value={parent.id} />

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
