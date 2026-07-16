"use client";
import { createParent } from "@/actions/parent/create";
import { updateParent } from "@/actions/parent/update";

interface ParentFormProps {
  parent?: {
    id: string;
    name: string;
    username: string;
    phone: string | null;
  };
}

export function ParentForm({ parent }: ParentFormProps) {
  return (
    <form
      action={parent ? updateParent : createParent}
      className="space-y-4"
    >
      {parent && <input type="hidden" name="id" value={parent.id} />}

      {!parent && (
        <>
          <input
            name="username"
            placeholder="Username"
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full border p-2 rounded"
          />
        </>
      )}

      <input
        name="name"
        placeholder="Full Name"
        defaultValue={parent?.name}
        required
        className="w-full border p-2 rounded"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        defaultValue={parent?.phone ?? ""}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {parent ? "Update Parent" : "Create Parent"}
      </button>
    </form>
  );
}
