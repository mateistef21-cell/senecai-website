import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "cream",
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  tone?: "cream" | "white" | "ink";
  className?: string;
}) {
  const toneClasses =
    tone === "white" ? "bg-white" : tone === "ink" ? "bg-ink text-cream" : "bg-cream-50";

  return (
    <section id={id} className={`scroll-mt-24 ${toneClasses} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        {(eyebrow || title || intro) && (
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <p
                className={`mb-3 text-xs font-bold uppercase tracking-[0.14em] ${
                  tone === "ink" ? "text-gold-400" : "text-gold-600"
                }`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-headline text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className={`mt-4 text-base leading-relaxed ${tone === "ink" ? "text-cream/80" : "text-slate"}`}>
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
