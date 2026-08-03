"use client";

import { useLocale } from "@/lib/LocaleContext";
import { PillButton } from "./PillButton";

export function Hero() {
  const { t } = useLocale();
  const [headlineA, headlineB] = t.hero.headline;

  return (
    <section className="relative overflow-hidden wave-bg">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="font-headline text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {headlineA}
            <br />
            <span className="text-gold-500">{headlineB}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg">{t.hero.subhead}</p>

          <p className="mt-4 text-sm font-bold uppercase tracking-[0.08em] text-ink-700 sm:text-base">
            {t.hero.tagline}
          </p>

          <div className="mt-9">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">{t.hero.checkLabel}</p>
            <ul className="flex flex-col gap-2.5">
              {t.hero.checks.map((check) => (
                <li key={check.label}>
                  <a
                    href={check.href}
                    className="group inline-flex items-center gap-2 text-[15px] font-semibold text-gold-600 transition-colors hover:text-gold-700"
                  >
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                    {check.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9">
            <PillButton href="#final-cta" variant="primary" className="px-7 py-3.5 text-[15px]">
              {t.hero.ctaPrimary}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
