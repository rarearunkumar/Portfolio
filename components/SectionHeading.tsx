type Props = {
  eyebrow: string;
  title: React.ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, align = "left" }: Props) {
  return (
    <header
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-(--color-muted)">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
    </header>
  );
}
