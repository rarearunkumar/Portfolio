import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";

const contactLinks = [
  { label: "LinkedIn", href: profile.links.linkedin, hint: "linkedin.com/in/rarearun" },
  { label: "Resume", href: profile.links.resume, hint: "Drive · PDF" },
  { label: "Email", href: profile.links.email, hint: profile.links.email.replace("mailto:", "") },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-(--color-line)">
      <div className="container-edge py-24 md:py-32">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-(--color-muted)">
            Contact
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-6 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight">
            Let&apos;s <span className="italic">talk</span>.
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-(--color-muted)">
            Open to staff and lead design roles, advisory work, and the occasional
            late‑night chat about craft. Best reached on LinkedIn.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <ul className="mt-14 divide-y divide-(--color-line) border-y border-(--color-line)">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-between py-6 transition-colors hover:text-(--color-accent) md:py-8"
                >
                  <span className="font-serif text-2xl tracking-tight md:text-3xl">
                    {link.label}
                  </span>
                  <span className="flex items-center gap-4 text-sm text-(--color-muted) group-hover:text-(--color-accent)">
                    <span className="hidden sm:inline">{link.hint}</span>
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
