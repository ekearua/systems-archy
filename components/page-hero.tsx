type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="pb-14 pt-8">
      <p className="eyebrow text-xs text-primary">{eyebrow}</p>
      <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.05em] text-balance md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/76">
        {description}
      </p>
    </section>
  );
}
