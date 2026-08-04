"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";
import { PillarStack } from "./PillarStack";

export function WhyChooseSection() {
  const { t, locale } = useLocale();
  const moreLabel = locale === "ro" ? "Detalii" : "More details";
  const lessLabel = locale === "ro" ? "Restrânge" : "Show less";

  return (
    <Section id="why-choose" eyebrow={t.whyChoose.eyebrow} title={t.whyChoose.headline} tone="white">
      <p className="max-w-2xl text-center font-headline text-base font-bold uppercase tracking-[0.08em] text-ink-700 sm:text-left sm:text-lg">
        {t.whyChoose.subtitleLarge}
      </p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate">{t.whyChoose.bodyPara1}</p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">{t.whyChoose.bodyPara2}</p>

      <p className="mx-auto mt-12 max-w-xl -rotate-1 text-center font-headline text-xl font-bold italic leading-snug text-gold-700 sm:text-2xl">
        &ldquo;{t.whyChoose.floatingLine}&rdquo;
      </p>

      <div className="mt-14">
        <PillarStack pillars={t.whyChoose.pillars} moreLabel={moreLabel} lessLabel={lessLabel} />
      </div>
    </Section>
  );
}
