"use client";

interface StudentFormProps {
  studentId?: string;
}

export function StudentForm({ studentId }: StudentFormProps) {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">First Name</label>
        <input 
          type="text" 
          name="firstName" 
          className="w-full p-2 border rounded-md" 
          placeholder="First Name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Last Name</label>
        <input 
          type="text" 
          name="lastName" 
          className="w-full p-2 border rounded-md" 
          placeholder="Last Name"
        />
      </div>
      {/* Add remaining form fields */}
      <div className="pt-4 flex justify-end gap-2">
        <button type="button" className="px-4 py-2 border rounded-md hover:bg-accent">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
          {studentId ? "Update" : "Create"} Student
        </button>
      </div>
    </form>
  );
}
