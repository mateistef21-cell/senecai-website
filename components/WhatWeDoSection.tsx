"use client";

import { useState } from "react";
import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";
import { Icon } from "./Icon";
import type { WhatWeDoItem } from "@/lib/types";

function ItemCard({ item, index, moreLabel, lessLabel }: { item: WhatWeDoItem; index: number; moreLabel: string; lessLabel: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-2xl border border-gold-200 bg-cream-50 p-6 shadow-card transition-shadow hover:shadow-pop">
      <div className="mb-4 flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-700">
          <Icon name={item.icon} className="h-5 w-5" />
        </span>
        <span className="font-headline text-xs font-bold text-gold-300">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="font-headline text-lg font-bold text-ink">{item.title}</h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-slate">{item.short}</p>

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

      <div className={`grid transition-all duration-300 ease-in-out ${open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="text-[15px] leading-relaxed text-slate">{item.details}</p>
          <p className="mt-3 text-sm font-semibold text-gold-600">{item.framework}</p>
          <ul className="mt-3 flex flex-col gap-2">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-slate">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function WhatWeDoSection() {
  const { t, locale } = useLocale();
  const moreLabel = locale === "ro" ? "Detalii" : "More details";
  const lessLabel = locale === "ro" ? "Restrânge" : "Show less";

  return (
    <Section id="what-we-do" eyebrow={t.whatWeDo.eyebrow} title={t.whatWeDo.introHeadline} tone="white">
      <p className="max-w-2xl text-base leading-relaxed text-slate">{t.whatWeDo.introPara1}</p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">{t.whatWeDo.introPara2}</p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.whatWeDo.items.map((item, i) => (
          <ItemCard key={item.title} item={item} index={i} moreLabel={moreLabel} lessLabel={lessLabel} />
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-gold-200 bg-ink px-6 py-10 text-cream sm:px-10">
        <h3 className="font-headline text-xl font-bold">{t.whatWeDo.deliveredTitle}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream/85">{t.whatWeDo.deliveredIntro}</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {t.whatWeDo.delivered.map((line) => (
            <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-cream/85">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-cream/85">{t.whatWeDo.deliveredClosing}</p>
      </div>

      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate">{t.whatWeDo.closingFooter}</p>
    </Section>
  );
}
