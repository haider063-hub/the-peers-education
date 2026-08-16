import Image from "next/image";
import { principals } from "@/lib/content";
import { cn } from "@/lib/cn";

export function PrincipalPortraits({
  size = "md",
}: {
  size?: "sm" | "md";
}) {
  return (
    <ul
      className={cn(
        "flex flex-wrap justify-center gap-5 sm:gap-6 lg:justify-start",
      )}
    >
      {principals.map((principal) => (
        <li key={principal.name} className="w-32 text-center sm:w-40">
          <div
            className={cn(
              "relative mx-auto overflow-hidden rounded-[12px] bg-cloud ring-1 ring-deep-navy/10",
              size === "sm"
                ? "h-40 w-32 sm:h-44 sm:w-36"
                : "h-52 w-32 sm:h-56 sm:w-40",
            )}
          >
            <Image
              src={principal.image}
              alt={`${principal.name}, ${principal.title}`}
              fill
              className="object-cover object-top"
              sizes="160px"
            />
          </div>
          <p className="mt-3 font-display text-base font-semibold leading-tight text-deep-navy sm:text-lg">
            {principal.name}
          </p>
          <p className="mt-0.5 text-sm font-medium uppercase tracking-wide text-muted">
            {principal.title}
          </p>
        </li>
      ))}
    </ul>
  );
}
