"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Container } from "@/components/Container";
import { stats } from "@/lib/content";

function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const numeric = match ? Number(match[1]) : null;
  const suffix = match?.[2] ?? "";
  const [shown, setShown] = useState(numeric === null ? value : "0");
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || numeric === null) {
      if (inView) setShown(value);
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(value);
      return;
    }
    const controls = animate(0, numeric, {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setShown(`${Math.round(latest)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, numeric, suffix, value]);

  return (
    <p
      ref={ref}
      className="font-display text-2xl font-bold text-deep-navy sm:text-4xl"
    >
      {shown}
    </p>
  );
}

export function StatStrip() {
  return (
    <section className="relative z-10 -mt-12 pb-6 sm:-mt-16">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[12px] bg-[#E5E7EB] shadow-[0_18px_50px_-24px_rgba(27,58,92,0.45)] sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white px-3 py-5 text-center sm:px-5 sm:py-7"
            >
              <CountUp value={stat.value} />
              <p className="mt-1 px-0.5 text-xs font-medium uppercase leading-tight tracking-wide text-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
