import { getAttendance } from "@/lib/services/attendance.service";

export async function AttendanceTable() {
  const records = await getAttendance();

  if (records.length === 0) {
    return <p className="text-muted-foreground">No attendance records found.</p>;
  }

  return (
    <table className="w-full text-left">
      <thead>
        <tr className="border-b">
          <th className="py-2 px-4">Student</th>
          <th className="py-2 px-4">Teacher</th>
          <th className="py-2 px-4">Status</th>
          <th className="py-2 px-4">Verification</th>
          <th className="py-2 px-4">Check In</th>
          <th className="py-2 px-4">Check Out</th>
          <th className="py-2 px-4">Date</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <tr key={record.id} className="border-b">
            <td className="py-2 px-4">
              {record.student.firstName} {record.student.lastName}
            </td>
            <td className="py-2 px-4">{record.teacher.name}</td>
            <td className="py-2 px-4">{record.status}</td>
            <td className="py-2 px-4">{record.verificationMethod}</td>
            <td className="py-2 px-4">
              {record.checkIn
                ? new Date(record.checkIn).toLocaleTimeString()
                : "—"}
            </td>
            <td className="py-2 px-4">
              {record.checkOut
                ? new Date(record.checkOut).toLocaleTimeString()
                : "—"}
            </td>
            <td className="py-2 px-4">
              {new Date(record.createdAt).toLocaleDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
