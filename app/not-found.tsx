import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell-container flex min-h-[60vh] items-center justify-center pb-24">
      <div className="glass-panel max-w-xl rounded-[28px] p-10 text-center">
        <p className="eyebrow text-[11px] text-primary">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
          That page is not in this system map.
        </h1>
        <p className="mt-4 text-base leading-7 text-foreground/75">
          The route may have moved, or the content has not been published yet.
        </p>
        <Link
          href="/systems"
          className="mt-8 inline-flex rounded-full bg-primary-strong px-5 py-3 text-sm font-semibold text-white"
        >
          Go back to systems
        </Link>
      </div>
    </div>
  );
}
