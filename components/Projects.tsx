import { projects, type ProjectStatus } from "@/lib/data";
import Reveal from "@/components/Reveal";

const statusMeta: Record<ProjectStatus, { label: string; classes: string; dot: string }> = {
  published: {
    label: "Published",
    classes: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    dot: "bg-emerald-400",
  },
  "in-progress": {
    label: "In Progress",
    classes: "border-gold/40 bg-gold/10 text-gold",
    dot: "bg-gold",
  },
  planned: {
    label: "Planned",
    classes: "border-sky-400/30 bg-sky-400/10 text-sky-300",
    dot: "bg-sky-400",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-gold uppercase">
            03 · Projects
          </p>
          <h2 className="font-serif text-4xl text-ivory sm:text-5xl">Building in public</h2>
          <p className="mt-4 max-w-2xl text-stone sm:text-lg">
            The learning tracks that extend my professional work — kernel engineering,
            LLM post-training, and frontier on-device enablement. Every number is measured.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const meta = statusMeta[project.status];
            const featured = project.featured;
            return (
              <Reveal
                key={project.title}
                delay={(i % 2) * 80}
                className={featured ? "md:col-span-2" : ""}
              >
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-2/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-ink-2/80 hover:shadow-2xl hover:shadow-black/40 sm:p-8 ${
                    featured ? "lg:flex-row lg:gap-10" : ""
                  }`}
                >
                  {/* subtle corner glow on hover */}
                  <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className={`relative ${featured ? "lg:flex-1" : ""}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide uppercase ${meta.classes}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${meta.dot} animate-pulse`} />
                        {meta.label}
                      </span>
                      <span className="font-mono text-[11px] tracking-wide text-dim uppercase">
                        {project.domain}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-2xl text-ivory transition-colors group-hover:text-gold-bright sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-stone italic">{project.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-stone">{project.description}</p>
                  </div>

                  <div className={`relative mt-6 ${featured ? "lg:mt-0 lg:flex-1 lg:flex-col" : ""}`}>
                    {project.metrics ? (
                      <div className={`grid grid-cols-3 gap-3 ${featured ? "lg:grid-cols-3" : ""}`}>
                        {project.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-lg border border-line bg-ink/50 px-3 py-2.5 text-center transition-colors group-hover:border-gold/25"
                          >
                            <p className="font-serif text-base font-semibold text-gradient-gold sm:text-lg">
                              {m.value}
                            </p>
                            <p className="mt-0.5 text-[10px] leading-tight text-dim">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    <div className={`mt-5 flex flex-wrap items-center gap-2 ${featured ? "lg:mt-auto lg:pt-4" : ""}`}>
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-line bg-ink/60 px-2.5 py-1 font-mono text-[11px] text-stone"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {project.links ? (
                      <div className={`mt-6 ${featured ? "lg:mt-4" : ""}`}>
                        {project.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-4 py-2 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-ink"
                          >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            {l.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-6 font-mono text-[11px] text-dim">
                        Repo &amp; benchmarks forthcoming — this project is being built right now.
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
