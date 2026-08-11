const stats = [
  {
    metric: "latency",
    value: "800ms → 50ms",
    delta: "▼ 16×",
    deltaClass: "text-emerald-300",
    detail: "BEVFormer e2e inference",
  },
  {
    metric: "vram",
    value: "4.94 GB",
    delta: "= parity",
    deltaClass: "text-stone",
    detail: "peak, no_grad, fp16",
  },
  {
    metric: "decode",
    value: "~24 ms/tok",
    delta: "▲ 23.8×",
    deltaClass: "text-emerald-300",
    detail: "ring-buffer KV cache fix",
  },
  {
    metric: "e2e",
    value: "+5.4%",
    delta: "✓ byte-identical",
    deltaClass: "text-gold",
    detail: "full swap v5 decode",
  },
];

export default function ProfilerStats() {
  return (
    <div className="border-y border-line bg-ink-2/30">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] tracking-[0.2em] text-dim uppercase">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
            ncu --set full · summary profile
          </span>
          <span>RTX 3060 · fp16 · torch 2.13 · triton 3.7</span>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.metric}
              className="group bg-ink-2/70 p-5 transition-colors hover:bg-ink-3/70"
            >
              <p className="font-mono text-[10px] tracking-[0.25em] text-dim uppercase">
                {s.metric}
              </p>
              <p className="mt-2 font-mono text-xl text-ivory sm:text-2xl">{s.value}</p>
              <p className={`mt-1.5 font-mono text-xs ${s.deltaClass}`}>{s.delta}</p>
              <p className="mt-1 text-[11px] text-dim">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
