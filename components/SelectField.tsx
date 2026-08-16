"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

const triggerClass =
  "flex min-h-12 w-full items-center justify-between gap-3 rounded-[10px] border border-deep-navy/15 bg-white px-4 py-3 text-left text-base text-ink outline-none transition-[border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:border-deep-navy/40 focus:shadow-none";

export function SelectField({
  id,
  name,
  label,
  options,
  placeholder = "Select an option",
  defaultValue = "",
  required,
}: {
  id?: string;
  name: string;
  label: string;
  options: readonly string[];
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
}) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("mousedown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <label id={`${fieldId}-label`} className="text-base font-medium text-deep-navy">
        {label}
      </label>
      <input
        id={fieldId}
        name={name}
        value={value}
        required={required}
        tabIndex={-1}
        onChange={() => {}}
        className="sr-only"
        aria-hidden
      />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${fieldId}-label`}
        onClick={() => setOpen((current) => !current)}
        className={cn(triggerClass, "mt-1.5", !value && "text-muted/70")}
      >
        <span className="min-w-0 truncate">{value || placeholder}</span>
        <ChevronDown
          size={20}
          className={cn(
            "shrink-0 text-deep-navy transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "absolute z-20 mt-1 w-full overflow-hidden rounded-[10px] bg-white shadow-[0_12px_28px_-16px_rgba(27,58,92,0.35)] ring-1 ring-deep-navy/10 transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "grid",
          open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0",
        )}
      >
        <ul role="listbox" className="min-h-0 max-h-60 overflow-y-auto py-1">
          {options.map((option) => {
            const selected = option === value;
            return (
              <li key={option}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    setValue(option);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full px-4 py-2.5 text-left text-base transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    selected
                      ? "bg-cloud text-deep-navy"
                      : "text-ink lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-cloud/70",
                  )}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
