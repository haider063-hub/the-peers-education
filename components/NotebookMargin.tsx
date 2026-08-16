import { cn } from "@/lib/cn";

export function NotebookMargin({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative border-l-2 border-marigold pl-6 sm:pl-8", className)}>
      {children}
    </div>
  );
}
