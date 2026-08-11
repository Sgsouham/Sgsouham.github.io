import { experience } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-gold uppercase">
            02 · Experience
          </p>
          <h2 className="font-serif text-4xl text-ivory sm:text-5xl">
            The work that shipped
          </h2>
          <p className="mt-4 max-w-2xl text-stone sm:text-lg">
            Five years of production model optimization — from quantization tooling to a
            10-person on-device AI platform team.
          </p>
        </Reveal>

        <div className="relative mt-14 space-y-10 border-l border-line pl-8 sm:pl-12">
          {experience.map((role, idx) => (
            <Reveal key={`${role.company}-${idx}`} delay={idx * 60} className="relative">
              {/* timeline dot */}
              <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[57px]">
                <span className="absolute h-4 w-4 rounded-full border border-gold/50 bg-ink" />
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </span>

              <article className="group rounded-2xl border border-line bg-ink-2/40 p-6 transition-all duration-300 hover:border-gold/30 hover:bg-ink-2/70 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl text-ivory">{role.company}</h3>
                  <span className="font-mono text-xs text-gold">{role.period}</span>
                </div>

                <p className="mt-1.5 text-sm font-medium text-stone">
                  {role.role}
                  {role.location ? <span className="text-dim"> · {role.location}</span> : null}
                </p>

                {role.companyNote ? (
                  <p className="mt-2 font-mono text-xs text-dim italic">{role.companyNote}</p>
                ) : null}

                {role.highlights ? (
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {role.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="rounded-lg border border-line bg-ink/50 px-3 py-2.5 text-center transition-colors group-hover:border-gold/25"
                      >
                        <p className="font-serif text-lg font-semibold text-gradient-gold">{h.value}</p>
                        <p className="mt-0.5 text-[11px] leading-tight text-dim">{h.label}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                <ul className="mt-5 space-y-3">
                  {role.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-stone">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
