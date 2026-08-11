import { skillClusters, languages } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-gold uppercase">
            04 · Skills
          </p>
          <h2 className="font-serif text-4xl text-ivory sm:text-5xl">
            The toolbox, in clusters
          </h2>
          <p className="mt-4 max-w-2xl text-stone sm:text-lg">
            Only defensible skills — everything here is used in production work or backed
            by a published project.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skillClusters.map((cluster, i) => (
            <Reveal key={cluster.title} delay={(i % 2) * 80}>
              <div className="group h-full rounded-2xl border border-line bg-ink-2/40 p-7 transition-all duration-300 hover:border-gold/40 hover:bg-ink-2/70">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
                    {cluster.icon}
                  </span>
                  <h3 className="font-serif text-xl text-ivory">{cluster.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cluster.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-line bg-ink/60 px-3 py-1.5 text-xs text-stone transition-colors group-hover:border-gold/25"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-ink-2/40 px-7 py-6">
            <span className="font-mono text-xs tracking-[0.25em] text-dim uppercase">
              Languages &amp; frameworks
            </span>
            {languages.map((l) => (
              <span
                key={l}
                className="rounded-md border border-gold/25 bg-gold/5 px-3 py-1.5 font-mono text-xs text-gold/90"
              >
                {l}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
