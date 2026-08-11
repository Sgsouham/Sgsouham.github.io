import { about, profile } from "@/lib/data";
import Reveal from "@/components/Reveal";
import CodeEditor from "@/components/CodeEditor";

const principles = [
  {
    title: "Measured, not marketed",
    body: "Every claim is a benchmark result — including the losses. Honest negative results are how credibility is built.",
  },
  {
    title: "Framework-level first",
    body: "Most of enterprise optimization leverage lives in the graph, not the kernel. Architecture before micro-tuning.",
  },
  {
    title: "Ship for the hardware",
    body: "Models are production-ready when they run on constrained devices within latency and accuracy targets — not just on a server.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-gold uppercase">
            01 · About
          </p>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight text-ivory sm:text-5xl">
            {about.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="max-w-3xl text-base leading-relaxed text-stone sm:text-lg">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={260}>
              <p className="font-mono text-xs text-dim">
                <span className="text-gold">#</span> the above, in code — open the tabs.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <CodeEditor />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {principles.map((pr, i) => (
            <Reveal key={pr.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-line bg-ink-2/50 p-7 transition-all duration-300 hover:border-gold/40 hover:bg-ink-3/60">
                <span className="font-mono text-xs text-gold">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-xl text-ivory">{pr.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{pr.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-line bg-ink-2/40 p-6 sm:p-8">
            <span className="font-mono text-xs tracking-[0.25em] text-dim uppercase">Currently</span>
            <p className="text-sm text-stone sm:text-base">
              Leading the <span className="text-ivory">On-device Model Enablement Platform</span> at Multicoreware Inc. —
              and building the next generation of post-training &amp; kernel tooling in public.
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-bright"
            >
              Let&apos;s talk
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
