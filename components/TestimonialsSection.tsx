"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";

const PARTNER_SLOTS = 6;

export function TestimonialsSection() {
  const { t } = useLocale();

  return (
    <Section id="testimonials" title={t.testimonials.title} tone="cream">
      <div className="max-w-2xl rounded-2xl border border-dashed border-gold-300 bg-gold-50/60 p-6">
        <p className="text-[15px] leading-relaxed text-slate">{t.testimonials.body}</p>
      </div>

      <p className="mt-10 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">{t.testimonials.partnersLabel}</p>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {Array.from({ length: PARTNER_SLOTS }).map((_, i) => (
          <div
            key={i}
            className="flex h-16 items-center justify-center rounded-xl border border-dashed border-gold-300 bg-cream-50 text-xs font-medium text-slate-light"
          >
            {t.testimonials.partnersPlaceholder}
          </div>
        ))}
      </div>
    </Section>
  );
}
