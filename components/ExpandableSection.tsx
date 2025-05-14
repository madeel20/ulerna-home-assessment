'use client';
import { useState } from "react";

interface ExpandableSectionProps {
  title: string;
  content: string;
}

const ExpandableSection = ({ title, content }: ExpandableSectionProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
      <button
        className="w-full flex justify-between items-center font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="expandable-content"
      >
        {title}
        <span className="ml-2">{open ? "▲" : "▼"}</span>
      </button>
      <div
        id="expandable-content"
        className={`mt-2 text-gray-700 dark:text-gray-200 text-base transition-all duration-200 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        aria-hidden={!open}
      >
        <pre className="whitespace-pre-wrap font-sans">{content}</pre>
      </div>
    </div>
  );
};

export default ExpandableSection;
