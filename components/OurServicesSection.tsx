"use client";

import { useState } from "react";
import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";
import { Icon } from "./Icon";

export function OurServicesSection() {
  const { t } = useLocale();
  const [selected, setSelected] = useState(0);
  const item = t.whatWeDo.items[selected];

  return (
    <Section id="services" tone="white">
      <h2 className="text-center font-headline text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl">
        {t.whatWeDo.title}
      </h2>

      <div className="mt-12 grid items-start gap-4 lg:grid-cols-[340px_1fr] lg:gap-8">
        <nav className="flex flex-col gap-1.5" aria-label="Services">
          {t.whatWeDo.items.map((navItem, i) => {
            const active = i === selected;
            return (
              <button
                key={navItem.title}
                type="button"
                onClick={() => setSelected(i)}
                aria-current={active}
                className={`flex items-start gap-3.5 rounded-xl px-4 py-3.5 text-left transition-all duration-200 ${
                  active ? "border border-gold-400 bg-cream-50 shadow-card" : "border border-transparent hover:bg-cream-50/70"
                }`}
              >
                <span
                  className={`flex shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 transition-all duration-200 ${
                    active ? "h-10 w-10" : "h-8 w-8"
                  }`}
                >
                  <Icon name={navItem.icon} className={active ? "h-5 w-5" : "h-4 w-4"} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className={`font-headline text-[15px] leading-tight text-ink ${active ? "font-bold" : "font-semibold"}`}>
                      {navItem.title}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-slate-light">{navItem.short}</span>
                </span>
                <span className="shrink-0 font-headline text-[11px] font-bold text-gold-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="max-w-2xl rounded-2xl border border-gold-200 bg-cream-50 p-7 sm:p-9">
          <div key={selected} className="animate-fade-in-up">
            <h3 className="font-headline text-2xl font-extrabold text-ink">{item.title}</h3>
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
            <p className="mt-5 text-[15px] leading-relaxed text-slate">{item.details}</p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-ink-700">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
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
