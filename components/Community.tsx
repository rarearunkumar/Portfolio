import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Community() {
  return (
    <section id="community" className="border-t border-(--color-line)">
      <div className="container-edge py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Community & Mentorship"
            title={
              <>
                Designers grow faster
                <br className="hidden md:block" /> in <span className="italic">good company</span>.
              </>
            }
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {profile.community.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article className="flex h-full flex-col rounded-3xl border border-(--color-line) p-8 md:p-10">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-(--color-muted)">
                  {c.role}
                </p>
                <h3 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
                  {c.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-(--color-muted)">
                  {c.blurb}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
