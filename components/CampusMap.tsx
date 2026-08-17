"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { school } from "@/lib/content";
import { cn } from "@/lib/cn";

export function CampusMap({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[12px] ring-1 ring-deep-navy/10",
        compact ? "ring-marigold/40" : "ring-deep-navy/10",
        className,
      )}
    >
      {loaded ? (
        <iframe
          title="The Peers Education System campus map"
          src={school.mapsEmbed}
          className={cn("w-full border-0", compact ? "h-48 sm:h-56" : "h-56 sm:h-72")}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className={cn(
            "flex w-full flex-col items-center justify-center gap-2 px-4 text-center",
            compact
              ? "h-48 bg-[#0e2238] text-white sm:h-56"
              : "h-56 bg-cloud text-deep-navy sm:h-72",
          )}
        >
          <MapPin size={28} className="text-marigold" />
          <span className="font-display text-lg font-semibold">
            Load campus map
          </span>
          <span
            className={cn(
              "max-w-xs text-sm",
              compact ? "text-white/70" : "text-muted",
            )}
          >
            {school.location}
          </span>
        </button>
      )}
    </div>
  );
}
