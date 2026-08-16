import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-marigold">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-deep-navy sm:text-4xl">
        This page is not on the timetable.
      </h1>
      <p className="mt-3 max-w-md text-base text-muted">
        The link may have moved. Head back to the homepage or send us a
        message.
      </p>
      <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row">
        <ButtonLink href="/" variant="navy" className="w-full sm:w-auto">
          Home
        </ButtonLink>
        <ButtonLink href="/contact" variant="ghost" className="w-full sm:w-auto">
          Contact
        </ButtonLink>
      </div>
    </div>
  );
}
