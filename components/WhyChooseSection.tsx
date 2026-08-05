"use client";

import { useState } from "react";
import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";
import { Icon } from "./Icon";
import type { PillarContent } from "@/lib/types";

function PillarCard({ pillar, moreLabel, lessLabel }: { pillar: PillarContent; moreLabel: string; lessLabel: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col self-start rounded-2xl border border-gold-200 bg-white p-6 shadow-card transition-shadow hover:shadow-pop">
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
    <Section id="why-choose" tone="white">
      <h2 className="text-center font-headline text-3xl font-extrabold leading-[1.1] tracking-tight text-gold-500 sm:text-4xl">
        {t.whyChoose.heading}
      </h2>

      <p className="mx-auto mt-10 max-w-3xl text-center font-headline text-base font-bold uppercase tracking-[0.08em] text-ink-700 sm:text-lg">
        {t.whyChoose.leftSubtitle}
      </p>

      <div className="mx-auto mt-8 grid max-w-5xl gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <p className="text-base leading-relaxed text-slate">{t.whyChoose.leftBody}</p>
        </div>
        <div>
          <p className="text-base leading-relaxed text-slate">
            {t.whyChoose.rightBodyPrefix}
            <span className="font-semibold text-ink">{t.whyChoose.rightBodyBold}</span>
            {t.whyChoose.rightBodySuffix}
          </p>
        </div>
      </div>

      <div className="mt-14 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.whyChoose.pillars.map((pillar) => (
          <PillarCard key={pillar.title} pillar={pillar} moreLabel={moreLabel} lessLabel={lessLabel} />
        ))}
      </div>
    </Section>
  );
}
