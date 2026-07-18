"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--px", `${x * 18}px`);
      el.style.setProperty("--py", `${y * 12}px`);
      el.style.setProperty("--sx", `${50 + x * 6}%`);
      el.style.setProperty("--sy", `${42 + y * 4}%`);
    };

    const onLeave = () => {
      el.style.setProperty("--px", "0px");
      el.style.setProperty("--py", "0px");
      el.style.setProperty("--sx", "62%");
      el.style.setProperty("--sy", "42%");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section ref={ref} className="hero hero--interactive" aria-label="Introduction">
      {children}
    </section>
  );
}
