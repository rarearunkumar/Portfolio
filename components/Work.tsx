import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <section id="work" className="border-t border-(--color-line)">
      <div className="container-edge py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                Two case studies,
                <br className="hidden md:block" /> told end‑to‑end.
              </>
            }
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {profile.caseStudies.map((cs, i) => (
            <Reveal key={cs.n} delay={i * 120}>
              <a
                href={cs.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-(--color-line) bg-(--color-card) p-8 transition-all duration-500 hover:-translate-y-1 hover:border-(--color-accent)/50 md:p-10"
              >
                <div>
                  <span className="font-serif text-sm tracking-tight text-(--color-muted)">
                    Case Study {cs.n}
                  </span>
                  <h3 className="mt-6 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
                    {cs.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-(--color-muted)">
                    {cs.teaser}
                  </p>
                </div>

                <div className="mt-12 flex items-center justify-between">
                  <span className="text-sm font-medium text-(--color-fg)">
                    Open case study
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 place-items-center rounded-full border border-(--color-line) text-base transition-all duration-500 group-hover:border-(--color-accent) group-hover:bg-(--color-accent) group-hover:text-(--color-bg)"
                  >
                    ↗
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div className="mt-12 flex justify-center md:mt-16">
            <a
              href={profile.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm text-(--color-muted) transition-colors hover:text-(--color-fg)"
            >
              <span className="border-b border-(--color-line) pb-1 group-hover:border-(--color-fg)">
                See the full portfolio deck
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
