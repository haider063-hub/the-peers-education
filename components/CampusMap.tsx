import { school } from "@/lib/content";
import { cn } from "@/lib/cn";

export function CampusMap({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[12px] ring-1 ring-deep-navy/10",
        compact ? "ring-marigold/40" : "ring-deep-navy/10",
        className,
      )}
    >
      <iframe
        title="The Peers Education System campus map"
        src={school.mapsEmbed}
        className={cn("w-full border-0", compact ? "h-48 sm:h-56" : "h-56 sm:h-72")}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
