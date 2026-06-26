"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-soft/40 bg-surface/80 backdrop-blur-xl">
      <div className="shell-container">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="font-semibold tracking-[-0.04em] text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            {siteConfig.shortName}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.navigation.map((item) => {
              const active = isCurrentPath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "border-b-2 border-primary pb-1 text-primary"
                      : "text-foreground/72 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="hidden rounded-lg bg-primary-strong px-6 py-2 text-sm font-bold text-white shadow-[0_0_20px_rgba(0,82,255,0.15)] transition-transform hover:scale-[1.02] md:inline-flex"
            >
              Email Me
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className="rounded-lg border border-border-soft px-4 py-2 text-sm font-medium text-foreground/86 md:hidden"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav className="grid gap-2 border-t border-border-soft py-4 md:hidden">
            {siteConfig.navigation.map((item) => {
              const active = isCurrentPath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    active
                      ? "bg-primary-strong/10 text-primary"
                      : "bg-surface-quiet/80 text-foreground/78"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={`mailto:${siteConfig.contact.email}`}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex justify-center rounded-xl bg-primary-strong px-4 py-3 text-sm font-bold text-white"
            >
              Email Me
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
