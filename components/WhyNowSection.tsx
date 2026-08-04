"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";
import { WhyNowGraphic } from "./WhyNowGraphic";

export function WhyNowSection() {
  const { t } = useLocale();

  return (
    <Section id="why-now" tone="cream">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">{t.whyNow.eyebrow}</p>
          <h2 className="font-headline text-2xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-3xl">
            {t.whyNow.title}
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate">{t.whyNow.body}</p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <WhyNowGraphic />
        </div>
      </div>
    </Section>
  );
}
