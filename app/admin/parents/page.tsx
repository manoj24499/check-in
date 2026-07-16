import { Suspense } from "react";
import Link from "next/link";
import { ParentTable } from "@/components/parent/parent-table";

interface PageProps {
  searchParams: Promise<{ search?: string }>;
}

export default async function ParentsPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Parents</h1>
        <Link
          href="/admin/parents/new"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          Add Parent
        </Link>
      </div>

      <div className="bg-card rounded-xl border p-6">
        <Suspense fallback={<div>Loading parents...</div>}>
          <ParentTable search={search} />
        </Suspense>
      </div>
    </div>
  );
}
