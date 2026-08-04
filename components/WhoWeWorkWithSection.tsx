"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";
import { WhoWeWorkWithGraphic } from "./WhoWeWorkWithGraphic";

export function WhoWeWorkWithSection() {
  const { t } = useLocale();

  return (
    <Section id="who-we-work-with" tone="white">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
          <WhoWeWorkWithGraphic />
        </div>
        <div className="order-1 lg:order-2">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">{t.whoWeWorkWith.eyebrow}</p>
          <h2 className="font-headline text-2xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-3xl">
            {t.whoWeWorkWith.title}
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate">{t.whoWeWorkWith.body}</p>
        </div>
      </div>
    </Section>
  );
}
