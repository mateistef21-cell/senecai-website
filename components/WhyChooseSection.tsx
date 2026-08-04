"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";
import { PillarStack } from "./PillarStack";

export function WhyChooseSection() {
  const { t, locale } = useLocale();
  const moreLabel = locale === "ro" ? "Detalii" : "More details";
  const lessLabel = locale === "ro" ? "Restrânge" : "Show less";

  return (
    <Section id="why-choose" tone="white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-ink-700">{t.whyChoose.eyebrow}</p>
        <h2 className="font-headline text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
          <span className="text-gold-500">{t.whyChoose.headlineGold}</span>
          {t.whyChoose.headlineRest}
        </h2>

        <p className="mt-6 font-headline text-base font-bold uppercase tracking-[0.08em] text-ink-700 sm:text-lg">
          {t.whyChoose.subtitleLarge}
        </p>
        <p className="mt-6 text-base leading-relaxed text-slate">{t.whyChoose.bodyPara1}</p>
        <p className="mt-4 text-base leading-relaxed text-slate">{t.whyChoose.bodyPara2}</p>

        <p className="mx-auto mt-12 max-w-xl -rotate-1 text-center font-headline text-xl font-bold italic leading-snug text-gold-700 sm:text-2xl">
          &ldquo;{t.whyChoose.floatingLine}&rdquo;
        </p>
      </div>

      <div className="mt-14">
        <PillarStack pillars={t.whyChoose.pillars} moreLabel={moreLabel} lessLabel={lessLabel} />
      </div>
    </Section>
  );
}
