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
      src="/images/peers-logo.png?v=2"
      alt="The Peers Education System"
      width={2048}
      height={682}
      unoptimized
      priority={priority}
      className={cn("w-auto object-contain", className ?? "h-12 sm:h-14")}
    />
  );
}
