"use client";

import { useEffect, useRef, useState } from "react";
import { benchmarks } from "@/lib/codeContent";

const verdictMeta = {
  win: { label: "✓", color: "text-emerald-300" },
  loss: { label: "✗", color: "text-gold" },
  parity: { label: "=", color: "text-stone" },
} as const;

type Stage = { type: "cmd"; text: string } | { type: "out"; text: string };

export default function BenchmarkTerminal() {
  const [stages, setStages] = useState<Stage[]>([]);
  const [runningId, setRunningId] = useState<string | null>(null);
  const [typed, setTyped] = useState("");
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);

  // clear any pending timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [stages, typed]);

  const run = (bench: (typeof benchmarks)[number]) => {
    // cancel any in-flight animation before starting a new one
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);

    setRunningId(bench.id);
    setStages([]);
    setTyped("");

    const all: Stage[] = [
      { type: "cmd", text: `$ ${bench.command}` },
      ...bench.lines.map((l) => ({ type: "out" as const, text: l })),
    ];

    let i = 0;
    let charIdx = 0;

    const advance = () => {
      timerRef.current = null;
      if (i >= all.length) {
        setRunningId(null);
        setTyped("");
        return;
      }

      const stage = all[i];
      if (charIdx < stage.text.length) {
        charIdx++;
        if (stage.type === "cmd") {
          setTyped(stage.text.slice(0, charIdx));
        } else {
          setStages((prev) => [...prev.slice(0, i), { ...stage, text: stage.text.slice(0, charIdx) }]);
        }
        timerRef.current = window.setTimeout(advance, 6);
      } else {
        if (stage.type === "cmd") {
          setStages((prev) => [...prev, { ...stage, text: stage.text }]);
          setTyped("");
        } else {
          setStages((prev) => [...prev.slice(0, i), { ...stage, text: stage.text }]);
        }
        charIdx = 0;
        i++;
        timerRef.current = window.setTimeout(advance, stage.type === "cmd" ? 200 : 60);
      }
    };

    timerRef.current = window.setTimeout(advance, 250);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-[#0c0c12] shadow-2xl shadow-black/50">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-line bg-ink-2/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-dim">
          souham@lead: ~/triton-op-swap — benchmarks
        </span>
      </div>

      {/* Body */}
      <div
        ref={bodyRef}
        className="h-64 overflow-y-auto p-4 font-mono text-[12px] leading-relaxed sm:text-[12.5px]"
        role="log"
        aria-label="Benchmark output terminal"
      >
        {stages.length === 0 && !runningId ? (
          <p className="text-dim">Select a benchmark below to run it.</p>
        ) : null}

        {stages.map((s, i) =>
          s.type === "cmd" ? (
            <p key={i} className="text-gold">
              {s.text}
            </p>
          ) : s.text.startsWith("result") || s.text.startsWith("verdict") || s.text.startsWith("note") ? (
            <p key={i} className="text-stone">
              {s.text.replace(/^(result|verdict|note)\s+/, (m) => m)}
            </p>
          ) : (
            <p key={i} className="text-stone/90">
              {s.text}
            </p>
          )
        )}

        {runningId ? (
          <p className="text-gold">
            {typed}
            <span className="cursor-blink text-gold">▍</span>
          </p>
        ) : null}
      </div>

      {/* Benchmark picker */}
      <div className="border-t border-line bg-ink-2/40 p-3">
        <p className="mb-2 px-1 font-mono text-[10px] tracking-wider text-dim uppercase">
          Run a benchmark:
        </p>
        <div className="flex flex-wrap gap-2">
          {benchmarks.map((b) => {
            const meta = verdictMeta[b.verdict];
            const isRunning = runningId === b.id;
            return (
              <button
                key={b.id}
                onClick={() => run(b)}
                disabled={runningId !== null && !isRunning}
                className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-[11px] transition-all ${
                  isRunning
                    ? "border-gold/60 bg-gold/15 text-gold"
                    : "border-line bg-ink/60 text-stone hover:border-gold/40 hover:text-ivory disabled:opacity-40"
                }`}
              >
                <span className={meta.color}>{meta.label}</span>
                {b.command.replace("python ", "").split(" ").slice(0, 2).join(" ") || b.id}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
