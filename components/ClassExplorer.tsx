"use client";

import { useEffect, useState } from "react";
import { classLevels } from "@/lib/content";
import { cn } from "@/lib/cn";

export function ClassExplorer() {
  const [open, setOpen] = useState<(typeof classLevels)[number]["slug"]>(
    classLevels[0].slug,
  );

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (
      classLevels.some((level) => level.slug === hash)
    ) {
      setOpen(hash as (typeof classLevels)[number]["slug"]);
    }
  }, []);

  function select(slug: (typeof classLevels)[number]["slug"]) {
    setOpen(slug);
    window.history.replaceState(null, "", `#${slug}`);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {classLevels.map((level) => (
          <button
            key={level.slug}
            type="button"
            onClick={() => select(level.slug)}
            className={cn(
              "min-h-11 rounded-full px-4 py-2 text-base font-medium transition-[color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              open === level.slug
                ? "bg-deep-navy text-white"
                : "bg-white text-deep-navy ring-1 ring-deep-navy/10 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-deep-navy lg:[@media(hover:hover)_and_(pointer:fine)]:hover:text-white",
            )}
          >
            {level.name.split(" (")[0]}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {classLevels.map((level) => {
          const isOpen = open === level.slug;
          return (
            <article
              key={level.slug}
              id={level.slug}
              className={cn(
                "scroll-mt-32 rounded-[12px] border bg-white p-5 sm:p-6 transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen
                  ? "border-marigold shadow-[0_12px_28px_-16px_rgba(27,58,92,0.35)]"
                  : "border-deep-navy/10",
              )}
            >
              <button
                type="button"
                onClick={() => select(level.slug)}
                className="w-full text-left"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-leaf">
                  {level.ages}
                </p>
                <h2 className="mt-2 font-display text-xl font-bold text-deep-navy sm:text-2xl">
                  {level.name}
                </h2>
              </button>
              <p
                className={cn(
                  "mt-3 text-muted transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isOpen ? "opacity-100" : "opacity-70",
                )}
              >
                {level.focus}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
