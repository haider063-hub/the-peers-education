export function ConfirmBadge({
  children = "Confirm with client",
}: {
  children?: string;
}) {
  return (
    <span className="ml-2 inline-flex align-middle rounded-md bg-marigold px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-deep-navy">
      {children}
    </span>
  );
}
