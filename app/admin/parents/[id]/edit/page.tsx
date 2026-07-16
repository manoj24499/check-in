import { notFound } from "next/navigation";
import { getParentById } from "@/lib/services/parent.service";
import { ParentForm } from "@/components/parent/parent-form";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditParentPage({ params }: PageProps) {
  const { id } = await params;

  const parent = await getParentById(id);

  if (!parent) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Edit Parent
      </h1>

      <ParentForm parent={parent} />
    </div>
  );
}
