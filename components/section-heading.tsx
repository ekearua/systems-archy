type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow text-xs text-primary">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-balance md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-foreground/74 md:text-lg md:leading-8">
        {description}
      </p>
    </div>
  );
}
