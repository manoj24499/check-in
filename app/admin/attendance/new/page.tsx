import { AttendanceForm } from "@/components/attendance/attendance-form";
import { getStudents } from "@/lib/services/student.service";
import { getTeachers } from "@/lib/services/teacher.service";

export default async function NewAttendancePage() {
  const [students, teachers] = await Promise.all([
    getStudents(),
    getTeachers(),
  ]);

  return (
    <div className="max-w-3xl p-8">
      <h1 className="text-3xl font-bold mb-6">Record Attendance</h1>

      <AttendanceForm students={students} teachers={teachers} />
    </div>
  );
}
