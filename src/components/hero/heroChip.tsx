import { Star } from "lucide-react";

export default function HeroChip() {
  return (
    <div className="p-2 px-4 border border-primary/50 text-primary rounded-full w-fit flex flex-row gap-2 items-center bg-primary/10">
      <Star size={14} fill="currentColor" />
      <p className="text-md font-medium">
        Courses start on the 19th March 2025
      </p>
    </div>
  );
}
