import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Working on a mobile product with complex backend synchronization or payment flows? Let's talk.",
};

export default function ContactPage() {
  const linkedInProfile = siteConfig.contact.links[0];
  const githubProfile = siteConfig.contact.links[1];

  return (
    <div className="dot-grid-page min-h-screen pb-24 pt-8">
      <div className="shell-container relative z-10">
        <div className="mb-20 max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-primary" />
            <span className="eyebrow text-xs text-primary">Inquiry Node</span>
          </div>
          <h1 className="mb-8 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            Contact
          </h1>
          <p className="text-lg leading-8 text-foreground/72">
            Working on a mobile product with complex backend synchronization or
            payment flows? <span className="font-medium text-foreground">Let&apos;s talk.</span> I
            specialize in architecting resilient systems that scale under
            pressure.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div className="glass-card rounded-xl p-8">
              <p className="mb-4 font-mono text-xs text-primary">SYSTEM_DIRECTORIES</p>
              <div className="space-y-6">
                <a className="flex items-center gap-4" href={`mailto:${siteConfig.contact.email}`}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-soft bg-surface-strong">
                    <span className="font-mono text-xs text-primary">@</span>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase text-muted">Primary Protocol</p>
                    <p className="text-base">{siteConfig.contact.email}</p>
                  </div>
                </a>

                <a
                  className="flex items-center gap-4"
                  href={siteConfig.contact.links[0].href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-soft bg-surface-strong">
                    <span className="font-mono text-xs text-primary">in</span>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase text-muted">Social Sync</p>
                    <p className="text-base">LinkedIn Profile</p>
                  </div>
                </a>

                <a
                  className="flex items-center gap-4"
                  href={siteConfig.contact.links[1].href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-soft bg-surface-strong">
                    <span className="font-mono text-xs text-primary">{`</>`}</span>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase text-muted">Repository Access</p>
                    <p className="text-base">GitHub Repository</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 border-t border-border-soft pt-8">
                <p className="mb-4 font-mono text-xs text-primary">AVAILABILITY_STATUS</p>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground/72">
                    Available for select systems engineering engagements
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-7">
            <div className="glass-card relative overflow-hidden rounded-xl p-8 md:p-12">
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
              <div className="relative space-y-8">
                <div className="space-y-4">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                    DIRECT_CONTACT
                  </p>
                  <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                    Reach me directly by email.
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-foreground/72">
                    Instead of routing messages through a portfolio form, this page
                    points straight to the channels I actively use for project
                    conversations and technical collaboration.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="rounded-xl border border-border-soft bg-surface-ink/70 p-5 transition-colors hover:border-primary/40 hover:bg-surface-ink"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                      Email
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground/72">
                      {siteConfig.contact.email}
                    </p>
                  </a>

                  <a
                    href={linkedInProfile.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-border-soft bg-surface-ink/70 p-5 transition-colors hover:border-primary/40 hover:bg-surface-ink"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                      LinkedIn
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground/72">
                      {linkedInProfile.label}
                    </p>
                  </a>

                  <a
                    href={githubProfile.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-border-soft bg-surface-ink/70 p-5 transition-colors hover:border-primary/40 hover:bg-surface-ink"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                      GitHub
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground/72">
                      {githubProfile.href.replace("https://", "")}
                    </p>
                  </a>
                </div>

                <div className="rounded-xl border border-border-soft bg-surface-ink/60 p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                    BEST_ENTRY_POINT
                  </p>
                  <p className="mt-4 text-sm leading-7 text-foreground/72">
                    For project inquiries, architecture reviews, or collaboration,
                    email is the fastest path. Include a short summary of the product,
                    the system challenge, and your timeline.
                  </p>
                </div>

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-flex items-center justify-center gap-3 rounded-lg bg-primary-strong px-10 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(0,82,255,0.15)] transition-all hover:scale-[1.02]"
                  >
                    Email Eke
                    <span aria-hidden="true">{">"}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
