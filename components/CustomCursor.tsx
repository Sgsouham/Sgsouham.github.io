"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse/trackpad), not touch
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    document.documentElement.classList.add("custom-cursor-active");

    const pos = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let hovering = false;
    let pressing = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    const onDown = () => {
      pressing = true;
    };

    const onUp = () => {
      pressing = false;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, summary, [data-cursor-hover]");
      hovering = Boolean(interactive);
    };

    const onLeave = () => {
      pos.x = -100;
      pos.y = -100;
      ring.x = -100;
      ring.y = -100;
    };

    const loop = () => {
      // ring eases toward the dot
      ring.x += (pos.x - ring.x) * 0.16;
      ring.y += (pos.y - ring.y) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        // clamp to viewport so the ring never gets cut off at the edges
        const clampedX = Math.min(Math.max(ring.x, 20), window.innerWidth - 20);
        const clampedY = Math.min(Math.max(ring.y, 20), window.innerHeight - 20);
        const scale = hovering ? 1.7 : pressing ? 0.8 : 1;
        ringRef.current.style.transform = `translate(${clampedX}px, ${clampedY}px) translate(-50%, -50%) scale(${scale})`;
        ringRef.current.style.opacity = hovering ? "0.9" : "0.6";
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* trailing ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-10 w-10 rounded-full border border-gold/60 opacity-60 transition-[opacity] duration-200 will-change-transform"
      />
      {/* dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,122,0.9)] will-change-transform"
      />
    </>
  );
}
