"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";

export function MethodSection() {
  const { t } = useLocale();
  const [selected, setSelected] = useState<number | null>(0);
  const [fillPercent, setFillPercent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    function update() {
      const el = trackRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const viewportCenter = window.innerHeight * 0.6;
        const progressed = viewportCenter - rect.top;
        const pct = rect.height > 0 ? Math.min(100, Math.max(0, (progressed / rect.height) * 100)) : 0;
        setFillPercent(pct);
      }
      raf = requestAnimationFrame(update);
    }
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <Section id="method" eyebrow={t.method.eyebrow} title={t.method.title} tone="cream">
      <div ref={trackRef} className="relative">
        <div className="absolute left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-gold-200 sm:block" aria-hidden="true" />
        <div
          className="absolute left-5 top-2 hidden w-px bg-gold-500 transition-[height] duration-150 ease-out sm:block"
          style={{ height: `calc(${fillPercent}% - ${fillPercent > 95 ? "1rem" : "0px"})` }}
          aria-hidden="true"
        />

        <ol className="flex flex-col gap-3">
          {t.method.steps.map((step, i) => {
            const active = selected === i;
            return (
              <li key={step.number} className="relative flex gap-5 sm:gap-6">
                <button
                  type="button"
                  onClick={() => setSelected((s) => (s === i ? null : i))}
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-headline text-sm font-extrabold transition-all duration-300 ${
                    active
                      ? "scale-[1.15] border-2 border-gold-500 bg-gold-500 text-ink shadow-pop"
                      : "border-2 border-gold-400 bg-cream-50 text-ink-700"
                  }`}
                  aria-expanded={active}
                >
                  {step.number}
                </button>
                <button
                  type="button"
                  onClick={() => setSelected((s) => (s === i ? null : i))}
                  className="flex-1 rounded-xl px-1 py-1 text-left transition-colors hover:bg-white/50"
                >
                  <h3 className={`font-headline text-lg transition-colors ${active ? "font-extrabold text-ink" : "font-bold text-ink-700"}`}>
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate">{step.summary}</p>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      active ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl text-[15px] leading-relaxed text-slate">{step.body}</p>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-16 border-t border-gold-200 pt-10">
        <h3 className="font-headline text-xl font-bold text-ink">{t.method.flexibleTitle}</h3>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-slate">{t.method.flexibleBody}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {t.method.onDemand.map((item) => (
            <div key={item.title} className="rounded-xl border border-gold-200 bg-white p-5 shadow-card">
              <p className="font-headline text-sm font-bold text-ink">{item.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
