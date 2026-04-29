import { profile } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-(--color-line)">
      <div className="container-edge flex flex-col items-start justify-between gap-4 py-10 text-sm text-(--color-muted) md:flex-row md:items-center">
        <p>
          © {year} {profile.name}. Designed and built in {profile.location}.
        </p>
        <a
          href="#top"
          className="transition-colors hover:text-(--color-fg)"
          aria-label="Back to top"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
