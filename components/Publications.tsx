import { publications, education } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Publications() {
  return (
    <section id="publications" className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* Publications */}
          <div>
            <Reveal>
              <p className="mb-4 font-mono text-xs tracking-[0.25em] text-gold uppercase">
                05 · Publications
              </p>
              <h2 className="font-serif text-4xl text-ivory sm:text-5xl">Peer-reviewed</h2>
            </Reveal>

            <div className="mt-10 space-y-6">
              {publications.map((pub, i) => (
                <Reveal key={pub.title} delay={i * 80}>
                  <article className="group rounded-2xl border border-line bg-ink-2/40 p-7 transition-all duration-300 hover:border-gold/40 hover:bg-ink-2/70">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-serif text-lg font-semibold text-ivory group-hover:text-gold-bright">
                        {pub.title}
                      </span>
                      <span className="shrink-0 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 font-mono text-xs text-gold">
                        {pub.year}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-stone">{pub.venue}</p>
                    {pub.note ? (
                      <p className="mt-2 font-mono text-xs text-dim">{pub.note}</p>
                    ) : null}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <Reveal>
              <p className="mb-4 font-mono text-xs tracking-[0.25em] text-gold uppercase">
                06 · Education
              </p>
              <h2 className="font-serif text-4xl text-ivory sm:text-5xl">Foundation</h2>
            </Reveal>

            <Reveal className="mt-10" delay={80}>
              <article className="rounded-2xl border border-line bg-ink-2/40 p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-serif text-xl font-semibold text-ivory">{education.school}</span>
                  <span className="shrink-0 font-mono text-xs text-gold">{education.period}</span>
                </div>
                <p className="mt-3 text-sm font-medium text-stone">{education.degree}</p>
                <p className="mt-1 text-sm text-dim">{education.location}</p>
                <div className="mt-5 flex items-center gap-2 rounded-lg border border-line bg-ink/50 px-4 py-3">
                  <span className="font-mono text-xs text-gold">GPA</span>
                  <span className="font-serif text-lg font-semibold text-ivory">{education.note.split(": ")[1]}</span>
                  <span className="ml-auto text-xs text-dim">out of 10.00</span>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
