import { marqueeKeywords } from "@/lib/data";

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="marquee-track flex shrink-0 items-center gap-0 pr-0"
    >
      {marqueeKeywords.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="flex shrink-0 items-center font-mono text-sm tracking-[0.2em] text-gold/80 uppercase"
        >
          <span className="px-8 whitespace-nowrap sm:px-10">{word}</span>
          <span className="text-gold-deep/70">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink-2/40 py-5">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ink to-transparent" />

      <div className="flex w-max">
        <Track />
        <Track ariaHidden />
      </div>
    </div>
  );
}
