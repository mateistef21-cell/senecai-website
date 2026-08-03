"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";
import { ExpandableRow } from "./ExpandableRow";

export function IntroSection() {
  const { t, locale } = useLocale();
  const moreLabel = locale === "ro" ? "Detalii" : "More details";
  const lessLabel = locale === "ro" ? "Restrânge" : "Show less";

  return (
    <>
      <Section id="who-we-are" eyebrow={t.intro.eyebrow} title={t.intro.whoTitle} tone="white">
        <p className="max-w-2xl text-base leading-relaxed text-slate">{t.intro.whoLead}</p>
        <p className="mt-6 max-w-2xl font-headline text-xl font-bold leading-snug text-ink sm:text-2xl">
          {t.intro.whoBold}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">{t.intro.whoBody}</p>

        <div className="mt-12 rounded-2xl border border-gold-200 bg-cream-50 px-6 sm:px-8">
          {t.intro.pillars.map((pillar) => (
            <ExpandableRow key={pillar.title} item={pillar} moreLabel={moreLabel} lessLabel={lessLabel} />
          ))}
        </div>
      </Section>

      <Section
        id="what-we-do"
        eyebrow={locale === "ro" ? "Ce facem" : "What we do"}
        title={t.intro.whatTitle}
        intro={t.intro.whatLead}
        tone="cream"
      >
        <div className="rounded-2xl border border-gold-200 bg-white px-6 sm:px-8">
          {t.intro.whatItems.map((item) => (
            <ExpandableRow key={item.title} item={item} eyebrow={item.framework} moreLabel={moreLabel} lessLabel={lessLabel} />
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate">{t.intro.whatFooter}</p>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">{t.intro.whyTitle}</p>
            <p className="text-base leading-relaxed text-slate">{t.intro.whyBody}</p>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
              {t.intro.whoWorkTitle}
            </p>
            <p className="text-base leading-relaxed text-slate">{t.intro.whoWorkBody}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
