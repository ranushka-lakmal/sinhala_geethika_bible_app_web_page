type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light"
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";
  const colors =
    tone === "dark"
      ? {
          eyebrow: "text-[#f3c56d]",
          title: "text-white",
          description: "text-slate-200"
        }
      : {
          eyebrow: "text-[#a46d19]",
          title: "text-[#14213d]",
          description: "text-slate-600"
        };

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p
        className={`text-sm font-semibold uppercase tracking-[0.18em] ${colors.eyebrow}`}
      >
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${colors.title}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-8 sm:text-lg ${colors.description}`}>
        {description}
      </p>
    </div>
  );
}
