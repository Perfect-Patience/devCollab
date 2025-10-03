import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CheckIcon, CaretSortIcon } from "@radix-ui/react-icons";

const availableTechStack = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "node", label: "Node.js" },
  { value: "svelte", label: "Svelte" },
  { value: "nextjs", label: "Next.js" },
];

export default function TechStackSelect({ onChange }) {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleTech = (value) => {
    setSelected((prev) => {
      const newSelected = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];

      if (onChange) onChange(newSelected); // notify parent
      return newSelected;
    });
  };

  // Filtered list based on search input
  const filteredStack = availableTechStack.filter((tech) =>
    tech.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full space-y-3">
      {/* Dropdown */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {selected.length > 0
              ? `${selected.length} technology${selected.length > 1 ? "ies" : ""} selected`
              : "Select technologies..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-2 space-y-2">
          {/* Search box */}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border px-2 py-1 text-sm"
          />

          {/* List */}
          <div className="max-h-60 overflow-auto">
            {filteredStack.length === 0 && (
              <div className="p-2 text-sm text-gray-500">No results</div>
            )}
            {filteredStack.map((tech) => (
              <div
                key={tech.value}
                onClick={() => toggleTech(tech.value)}
                className="flex cursor-pointer items-center justify-between rounded-md px-2 py-1 hover:bg-accent"
              >
                <span>{tech.label}</span>
                {selected.includes(tech.value) && (
                  <CheckIcon className="h-4 w-4 text-primary" />
                )}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      {/* Selected tags */}
      <div className="flex flex-wrap gap-2">
        {selected.map((item) => (
          <span
            key={item}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
          >
            {availableTechStack.find((t) => t.value === item)?.label}
          </span>
        ))}
      </div>
    </div>
  );
}
