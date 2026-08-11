import { profile } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="hero-glow relative border-t border-line py-24 sm:py-32">
      <div className="grid-bg absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-gold uppercase">
            07 · Contact
          </p>
          <h2 className="font-serif text-4xl leading-tight text-ivory sm:text-6xl">
            Let&apos;s build something
            <br />
            <span className="text-gradient-gold">efficient together.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
            I&apos;m always open to conversations about model optimization, on-device AI,
            LLM post-training, and engineering leadership.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2.5 rounded-lg bg-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition-all hover:bg-gold-bright hover:shadow-gold/30"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {profile.email}
            </a>

            <a
              href={profile.resumePdf}
              download="Souham_Ghosh_Resume.pdf"
              className="inline-flex items-center gap-2.5 rounded-lg border border-line px-7 py-3.5 text-sm font-medium text-ivory transition-all hover:border-gold/50 hover:bg-ink-3"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-line bg-ink-2/40 p-5 text-center transition-all hover:border-gold/40 hover:bg-ink-2/80"
            >
              <p className="font-mono text-xs text-dim">LinkedIn</p>
              <p className="mt-1.5 text-sm font-medium text-ivory group-hover:text-gold-bright">
                {profile.linkedinHandle}
              </p>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-line bg-ink-2/40 p-5 text-center transition-all hover:border-gold/40 hover:bg-ink-2/80"
            >
              <p className="font-mono text-xs text-dim">GitHub</p>
              <p className="mt-1.5 text-sm font-medium text-ivory group-hover:text-gold-bright">
                {profile.githubHandle}
              </p>
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="group rounded-xl border border-line bg-ink-2/40 p-5 text-center transition-all hover:border-gold/40 hover:bg-ink-2/80"
            >
              <p className="font-mono text-xs text-dim">Phone</p>
              <p className="mt-1.5 text-sm font-medium text-ivory group-hover:text-gold-bright">
                {profile.phone}
              </p>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
