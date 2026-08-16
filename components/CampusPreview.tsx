"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/Lightbox";
import { galleryItems } from "@/lib/content";

export function CampusPreview() {
  const items = galleryItems.slice(0, 6);
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((item, itemIndex) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setIndex(itemIndex)}
            className="group relative aspect-[4/3] overflow-hidden rounded-[12px]"
            aria-label={`Open photograph: ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none lg:[@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>
      <Lightbox
        items={items}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </>
  );
}
