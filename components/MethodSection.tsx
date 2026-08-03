"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";

export function MethodSection() {
  const { t } = useLocale();

  return (
    <Section id="method" eyebrow={t.method.eyebrow} title={t.method.title} tone="white">
      <div className="relative">
        <div
          className="absolute left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-gold-200 sm:block"
          aria-hidden="true"
        />
        <ol className="flex flex-col gap-8">
          {t.method.steps.map((step) => (
            <li key={step.number} className="relative flex gap-5 sm:gap-6">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold-500 bg-cream-50 font-headline text-sm font-extrabold text-ink">
                {step.number}
              </span>
              <div className="pt-1.5">
                <h3 className="font-headline text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-slate">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-14 grid gap-6 rounded-2xl border border-gold-200 bg-cream-50 p-6 sm:p-8 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h3 className="font-headline text-lg font-bold text-ink">{t.method.tailoredTitle}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-slate">{t.method.tailoredBody}</p>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
            {t.method.onDemandTitle}
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {t.method.onDemand.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-4 shadow-card">
                <p className="font-headline text-sm font-bold text-ink">{item.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm font-semibold text-gold-600">{t.method.footer}</p>
    </Section>
  );
}
