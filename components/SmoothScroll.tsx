"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, lenis]);

  return null;
}

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
      <ScrollToTop />
      {children}
    </ReactLenis>
  );
}
