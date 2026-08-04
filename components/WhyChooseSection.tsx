"use client";

import { useState } from "react";
import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";
import { Icon } from "./Icon";
import type { PillarContent } from "@/lib/types";

function PillarCard({ pillar, moreLabel, lessLabel }: { pillar: PillarContent; moreLabel: string; lessLabel: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-2xl border border-gold-200 bg-white p-6 shadow-card transition-shadow hover:shadow-pop">
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-700">
        <Icon name={pillar.icon} className="h-5 w-5" />
      </span>
      <h3 className="font-headline text-lg font-bold text-ink">{pillar.title}</h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-slate">{pillar.short}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-4 flex w-fit items-center gap-1.5 rounded-pill border border-gold-300 px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-gold-50"
      >
        {open ? lessLabel : moreLabel}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M1 3l4 4 4-4" stroke="#161410" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="text-[15px] leading-relaxed text-slate">{pillar.details}</p>
        </div>
      </div>
    </div>
  );
}

export function WhyChooseSection() {
  const { t, locale } = useLocale();
  const moreLabel = locale === "ro" ? "Detalii" : "More details";
  const lessLabel = locale === "ro" ? "Restrânge" : "Show less";

  return (
    <Section id="why-choose" eyebrow={t.whyChoose.eyebrow} title={t.whyChoose.title} tone="white">
      <p className="max-w-2xl text-base leading-relaxed text-slate">{t.whyChoose.lead}</p>
      <p className="mt-6 max-w-2xl font-headline text-xl font-bold leading-snug text-ink sm:text-2xl">
        {t.whyChoose.boldStatement}
      </p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">{t.whyChoose.body}</p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {t.whyChoose.pillars.map((pillar) => (
          <PillarCard key={pillar.title} pillar={pillar} moreLabel={moreLabel} lessLabel={lessLabel} />
        ))}
      </div>

      <p className="mt-10 text-center font-headline text-base font-bold uppercase tracking-[0.06em] text-ink-700 sm:text-lg">
        {t.whyChoose.tagline}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-gold-300 bg-gold-50 p-6 sm:p-7">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-gold-700">{t.whyChoose.cardWhyNowTitle}</p>
          <p className="text-[15px] leading-relaxed text-ink-700">{t.whyChoose.cardWhyNowBody}</p>
        </div>
        <div className="rounded-2xl border border-gold-200 bg-cream-50 p-6 sm:p-7">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">{t.whyChoose.cardWhoWorkTitle}</p>
          <p className="text-[15px] leading-relaxed text-ink-700">{t.whyChoose.cardWhoWorkBody}</p>
        </div>
      </div>
    </Section>
  );
}
