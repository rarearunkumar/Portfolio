import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="container-edge pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-44">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-(--color-muted)">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-(--color-accent)"
            />
            {profile.role} · {profile.location}
          </p>
        </Reveal>

        <Reveal delay={120} as="h1">
          <span className="mt-6 block font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] tracking-tight">
            Designing B2B, B2C, and{" "}
            <span className="italic text-(--color-accent)">0‑to‑1</span> products
            <br className="hidden md:block" /> for the past 12+ years.
          </span>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-(--color-muted) md:text-xl">
            Hi, I&apos;m {profile.name}. I help teams ship products people
            actually use — and I help designers grow into the kind of
            practitioners they want to be.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-full bg-(--color-fg) px-6 text-sm font-medium text-(--color-bg) transition-opacity hover:opacity-90"
            >
              View work
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-(--color-line) px-6 text-sm font-medium text-(--color-fg) transition-colors hover:bg-(--color-card)"
            >
              Resume
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
