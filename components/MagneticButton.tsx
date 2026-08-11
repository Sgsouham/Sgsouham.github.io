"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
};

export default function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  onClick,
}: MagneticButtonProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const rect = wrap.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    inner.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
  };

  const onLeave = () => {
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    inner.style.transform = "translate(0, 0)";
    setTimeout(() => {
      if (inner) inner.style.transition = "";
    }, 500);
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block ${className}`}
    >
      <div
        ref={innerRef}
        onClick={onClick}
        className="will-change-transform"
        style={{ transition: "transform 0.2s ease-out" }}
      >
        {children}
      </div>
    </div>
  );
}
