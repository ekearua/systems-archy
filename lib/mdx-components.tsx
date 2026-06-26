import type { ComponentPropsWithoutRef } from "react";

export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      {...props}
      className="mt-10 text-3xl font-semibold tracking-[-0.04em]"
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      {...props}
      className="mt-8 text-xl font-semibold tracking-[-0.03em]"
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p {...props} className="text-base leading-8 text-foreground/76" />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul {...props} className="ml-5 list-disc space-y-3 text-base leading-8 text-foreground/76" />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      {...props}
      className="ml-5 list-decimal space-y-3 text-base leading-8 text-foreground/76"
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong {...props} className="font-semibold text-foreground" />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a {...props} className="font-medium text-primary underline underline-offset-4" />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      {...props}
      className="border-l-2 border-primary/35 pl-5 text-base italic text-foreground/72"
    />
  ),
};
