import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/peers-logo.png"
      alt="The Peers Education System"
      width={398}
      height={145}
      priority={priority}
      className={cn("w-auto object-contain", className ?? "h-12 sm:h-14")}
    />
  );
}
