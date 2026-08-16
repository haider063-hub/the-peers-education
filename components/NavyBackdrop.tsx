export function NavyBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-deep-navy" />
      <div className="absolute inset-x-0 top-0 h-1.5 bg-marigold md:hidden" />
      <div
        aria-hidden
        className="absolute -top-28 -right-20 hidden h-[28rem] w-[28rem] rounded-full bg-marigold md:block"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-leaf/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
    </>
  );
}
