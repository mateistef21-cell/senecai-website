"use client";

import { useState } from "react";
import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";
import { Icon } from "./Icon";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0" aria-hidden="true">
      <circle cx="9" cy="9" r="8" stroke="#C9A24B" strokeWidth="1.4" />
      <path d="M5.5 9.2l2.2 2.2 4.8-4.8" stroke="#C9A24B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function OurServicesSection() {
  const { t } = useLocale();
  const [selected, setSelected] = useState(0);
  const item = t.whatWeDo.items[selected];

  return (
    <Section id="services" tone="white">
      <h2 className="text-center font-headline text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl">
        {t.whatWeDo.title}
      </h2>

      <div className="mt-10 overflow-x-auto border-b border-gold-200">
        <nav className="flex min-w-max gap-1 sm:gap-2" aria-label="Services">
          {t.whatWeDo.items.map((navItem, i) => {
            const active = i === selected;
            return (
              <button
                key={navItem.title}
                type="button"
                onClick={() => setSelected(i)}
                aria-current={active}
                className={`relative flex items-center gap-2 whitespace-nowrap px-3 pb-3.5 pt-2 text-sm font-semibold transition-colors sm:px-4 ${
                  active ? "text-ink" : "text-slate-light hover:text-ink-700"
                }`}
              >
                <Icon name={navItem.icon} className={`h-4 w-4 ${active ? "text-gold-600" : "text-gold-300"}`} />
                {navItem.title}
                <span
                  className={`absolute inset-x-0 -bottom-px h-0.5 rounded-full transition-colors ${
                    active ? "bg-gold-500" : "bg-transparent"
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </nav>
      </div>

      <div key={selected} className="animate-fade-in-up mt-10 grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div>
          <h3 className="font-headline text-2xl font-extrabold text-ink sm:text-3xl">{item.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-pill border border-gold-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-700"
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate">{item.details}</p>
        </div>

        <div className="rounded-2xl border border-gold-200 bg-cream-50 p-6 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-600">{t.whatWeDo.helpWithLabel}</p>
          <ul className="mt-3 divide-y divide-gold-200">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 py-3.5 text-[15px] leading-snug text-ink-700">
                <CheckIcon />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 rounded-2xl border border-gold-200 bg-ink px-6 py-10 text-cream sm:px-10">
        <h3 className="text-center font-headline text-sm font-bold uppercase tracking-[0.1em] text-gold-400">
          {t.whatWeDo.deliveredTitle}
        </h3>
        <div className="mt-7 grid gap-8 sm:grid-cols-3">
          {t.whatWeDo.delivered.map((col) => (
            <div key={col.label}>
              <p className="font-headline text-base font-bold text-cream">{col.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/80">{col.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
