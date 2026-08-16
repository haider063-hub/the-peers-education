"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLenis } from "lenis/react";

export type LightboxItem = {
  src: string;
  alt: string;
};

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: readonly LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}) {
  const lenis = useLenis();
  const open = index !== null;
  const item = open ? items[index] : null;

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open, lenis]);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        onIndexChange(((index ?? 0) + 1) % items.length);
      }
      if (event.key === "ArrowLeft") {
        onIndexChange(((index ?? 0) - 1 + items.length) % items.length);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, items.length, onClose, onIndexChange]);

  if (!open || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-[60] flex cursor-pointer items-center justify-center bg-deep-navy/88 px-2 py-16 sm:p-4"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close photograph"
        className="absolute top-4 right-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-white text-deep-navy"
        onClick={onClose}
      >
        <X size={20} />
      </button>
      <div
        className="flex w-full max-w-5xl cursor-default items-center gap-1 sm:gap-3"
        onClick={(event) => event.stopPropagation()}
      >
        {items.length > 1 ? (
          <button
            type="button"
            aria-label="Previous photograph"
            className="relative z-20 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white text-deep-navy"
            onClick={() =>
              onIndexChange((index - 1 + items.length) % items.length)
            }
          >
            <ChevronLeft size={22} />
          </button>
        ) : null}
        <figure className="min-w-0 flex-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] bg-black/20">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <figcaption className="mt-3 text-center text-base text-white/85">
            {item.alt}
          </figcaption>
        </figure>
        {items.length > 1 ? (
          <button
            type="button"
            aria-label="Next photograph"
            className="relative z-20 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white text-deep-navy"
            onClick={() => onIndexChange((index + 1) % items.length)}
          >
            <ChevronRight size={22} />
          </button>
        ) : null}
      </div>
    </div>
  );
}
