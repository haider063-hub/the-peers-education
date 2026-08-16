"use client";

import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      className="flex min-h-full flex-col"
      options={{
        lerp: 0.07,
        duration: 1.4,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.95,
      }}
    >
      {children}
    </ReactLenis>
  );
}
