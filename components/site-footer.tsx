import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const contactLinks = [
    {
      label: "Email",
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      label: "LinkedIn",
      href: siteConfig.contact.links[0].href,
    },
    {
      label: "GitHub",
      href: siteConfig.contact.links[1].href,
    },
  ];

  return (
    <footer className="relative z-10 border-t border-border-soft/40 bg-surface-ink/70 py-12">
      <div className="shell-container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-2">
          <div className="font-semibold tracking-[-0.03em] text-foreground">
            {siteConfig.shortName}
          </div>
          <p className="font-mono text-xs text-foreground/62">
            Copyright {currentYear} {siteConfig.shortName}. Built with technical rigor.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          {contactLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-mono text-xs text-foreground/66 transition-all hover:translate-x-1 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
