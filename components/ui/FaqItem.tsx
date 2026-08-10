interface FaqItemProps {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}

import {
  ChevronDown,
} from "lucide-react";

export function FaqItem({ q, a, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-neutral-800">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-sm md:text-base">{q}</span>
        <ChevronDown
          className={`text-orange-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-neutral-400 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}