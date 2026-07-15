"use client";

export function StudentSearch() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <input 
        type="text" 
        placeholder="Search students..." 
        className="w-full p-2 border rounded-md"
      />
      <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80">
        Search
      </button>
    </div>
  );
}
