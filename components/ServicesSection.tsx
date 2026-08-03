"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";

export function ServicesSection() {
  const { t } = useLocale();

  return (
    <Section id="services" eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} tone="cream">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.blocks.map((block, i) => (
          <div
            key={block.title}
            className="flex flex-col rounded-2xl border border-gold-200 bg-white p-6 shadow-card transition-shadow hover:shadow-pop"
          >
            <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-gold-100 text-sm font-bold text-gold-700">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-headline text-lg font-bold text-ink">{block.title}</h3>
            <p className="mt-1.5 text-sm font-medium text-gold-600">{block.framework}</p>
            <ul className="mt-4 flex flex-1 flex-col gap-2.5">
              {block.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-slate">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-gold-200 bg-ink px-6 py-10 text-cream sm:px-10">
        <h3 className="font-headline text-xl font-bold">{t.services.deliveredTitle}</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {t.services.delivered.map((line) => (
            <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-cream/85">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
              {line}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate">{t.services.footer}</p>
    </Section>
  );
}
