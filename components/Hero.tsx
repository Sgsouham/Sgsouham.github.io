"use client";

import { useEffect, useState } from "react";
import { profile, heroTerminalLines, metrics } from "@/lib/data";
import ParticleField from "@/components/ParticleField";
import MagneticButton from "@/components/MagneticButton";

function Terminal() {
  const [displayed, setDisplayed] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const current = heroTerminalLines[lineIndex];
    if (!current) {
      setDone(true);
      return;
    }

    if (charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed((d) => d + current[charIndex]);
        setCharIndex((c) => c + 1);
      }, 22);
      return () => clearTimeout(t);
    }

    // line complete → pause, then next line
    const t = setTimeout(() => {
      setDisplayed("");
      setCharIndex(0);
      setLineIndex((i) => i + 1);
    }, done ? 400 : 700);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex, done]);

  const isActiveLine = lineIndex < heroTerminalLines.length;

  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full max-w-lg rounded-xl border border-line bg-ink-2/80 p-4 font-mono text-[13px] leading-relaxed shadow-2xl shadow-black/50 backdrop-blur sm:text-sm"
    >
      <div className="mb-3 flex items-center gap-1.5 border-b border-line pb-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[11px] text-dim">souham@lead — zsh</span>
      </div>
      {heroTerminalLines.slice(0, lineIndex).map((line, i) => (
        <p key={i} className={i % 2 === 0 ? "text-stone" : "text-gold/90"}>
          {line}
        </p>
      ))}
      {isActiveLine && (
        <p className={lineIndex % 2 === 0 ? "text-stone" : "text-gold/90"}>
          {displayed}
          <span className="cursor-blink text-gold">▍</span>
        </p>
      )}
      <span className="sr-only">
        Specializing in model optimization, on-device AI enablement, and LLM post-training
      </span>
    </div>
  );
}

function MonogramAvatar() {
  return (
    <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
      {/* orbit rings */}
      <div className="absolute inset-0 rounded-full border border-gold/15 animate-spin-slow" style={{ borderStyle: "dashed" }} />
      <div className="absolute inset-3 rounded-full border border-gold/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "34s" }} />
      <div className="absolute -inset-1 rounded-full bg-gold/10 blur-2xl" />

      {/* monogram core */}
      <div className="animate-float-slow absolute inset-6 flex items-center justify-center rounded-full border border-gold/40 bg-gradient-to-b from-ink-3 to-ink-2 shadow-[0_0_60px_rgba(212,175,122,0.15)]">
        <span className="font-serif text-5xl font-semibold text-gradient-gold sm:text-6xl">
          {profile.monogram}
        </span>
      </div>

      {/* small orbital satellites */}
      <div className="absolute -right-1 top-8 hidden h-2.5 w-2.5 rounded-full bg-gold/70 shadow-[0_0_12px_rgba(212,175,122,0.8)] sm:block" />
      <div className="absolute -left-1 bottom-10 hidden h-1.5 w-1.5 rounded-full bg-gold/40 sm:block" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div className="grid-bg absolute inset-0" />
      <ParticleField />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: intro */}
          <div>
            <p className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 font-mono text-xs tracking-wider text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {profile.location}
            </p>

            <h1 className="animate-fade-up animate-fade-up-1 font-serif text-5xl leading-[1.05] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
              {profile.name.split(" ")[0]}
              <br />
              <span className="text-gradient-gold">{profile.name.split(" ")[1]}</span>
            </h1>

            <p className="animate-fade-up animate-fade-up-2 mt-5 font-serif text-xl text-stone sm:text-2xl">
              {profile.title}
            </p>
            <p className="animate-fade-up animate-fade-up-2 mt-2 font-mono text-sm text-dim">
              {profile.subtitle}
            </p>

            <p className="animate-fade-up animate-fade-up-3 mt-6 max-w-xl text-base leading-relaxed text-stone">
              {profile.tagline}
            </p>

            <div className="animate-fade-up animate-fade-up-4 mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <a
                  href={profile.resumePdf}
                  download="Souham_Ghosh_Resume.pdf"
                  className="group inline-flex items-center gap-2.5 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition-all hover:bg-gold-bright hover:shadow-gold/30"
                >
                  View Resume
                  <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                  </svg>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-lg border border-line px-6 py-3 text-sm font-medium text-ivory transition-all hover:border-gold/50 hover:bg-ink-3"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-lg border border-line px-6 py-3 text-sm font-medium text-ivory transition-all hover:border-gold/50 hover:bg-ink-3"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                  LinkedIn
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Right: monogram + terminal */}
          <div className="space-y-10">
            <div className="animate-fade-up animate-fade-up-2">
              <MonogramAvatar />
            </div>
            <div className="animate-fade-up animate-fade-up-4">
              <Terminal />
            </div>
          </div>
        </div>

        {/* Metrics strip */}
        <div className="animate-fade-up animate-fade-up-5 mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="group bg-ink-2/60 p-6 text-center transition-colors hover:bg-ink-3/80 sm:p-8">
              <p className="font-serif text-3xl font-semibold text-gradient-gold sm:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-dim sm:text-sm">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
