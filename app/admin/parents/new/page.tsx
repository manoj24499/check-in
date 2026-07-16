import { ParentForm } from "@/components/parent/parent-form";

export default function NewParentPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">
        Add Parent
      </h1>

      <ParentForm />
    </div>
  );
}
