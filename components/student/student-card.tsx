interface StudentCardProps {
  student: any; // Replace with proper type
}

export function StudentCard({ student }: StudentCardProps) {
  return (
    <div className="border rounded-xl p-4 bg-card shadow-sm">
      <div className="font-semibold text-lg">{student.firstName} {student.lastName}</div>
      <div className="text-sm text-muted-foreground mt-1">Admission: {student.admissionNumber}</div>
      <div className="text-sm mt-2">
        <span className="font-medium">Grade:</span> {student.grade} ({student.section})
      </div>
    </div>
  );
}
