import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="border-t border-(--color-line)">
      <div className="container-edge py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                A designer, a teammate,
                <br className="hidden md:block" /> and a{" "}
                <span className="italic">community builder</span>.
              </>
            }
          />
        </Reveal>

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-7">
            <p className="text-lg leading-relaxed text-(--color-fg) md:text-xl">
              {profile.bio}
            </p>

            <ul className="mt-10 flex flex-wrap gap-2">
              {profile.industries.map((industry) => (
                <li
                  key={industry}
                  className="rounded-full border border-(--color-line) px-4 py-1.5 text-sm text-(--color-muted)"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="md:col-span-5" delay={120}>
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-(--color-line) bg-(--color-line)">
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-(--color-bg) px-6 py-8 md:px-8 md:py-10"
                >
                  <dt className="font-serif text-5xl tracking-tight md:text-6xl">
                    {s.value}
                  </dt>
                  <dd className="mt-2 text-sm uppercase tracking-[0.15em] text-(--color-muted)">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
