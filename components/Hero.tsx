"use client";

import { useLocale } from "@/lib/LocaleContext";
import { PillButton } from "./PillButton";
import { EuropeMapBackground } from "./EuropeMapBackground";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden wave-bg">
      <EuropeMapBackground />
      <div className="relative mx-auto max-w-4xl px-5 pb-20 pt-16 text-center sm:pt-24 lg:pb-28 lg:pt-28">
        <h1 className="mx-auto animate-fade-in-up font-headline text-[2.15rem] font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.2rem]">
          {t.hero.headlinePrefix}
          <span className="text-gold-500">{t.hero.headlineGold}</span>
          {t.hero.headlineSuffix}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">{t.hero.subhead}</p>

        <div className="mt-9 flex flex-col items-center gap-3">
          <PillButton href="/#final-cta" variant="primary" className="px-8 py-3.5 text-[15px]">
            {t.hero.ctaPrimary}
          </PillButton>
          <div className="mt-1 flex flex-col items-center gap-3 sm:flex-row">
            <PillButton href="/tools" variant="outline" className="text-sm">
              {t.hero.secondaryCheck}
            </PillButton>
            <PillButton href="/#services" variant="outline" className="text-sm">
              {t.hero.secondaryHub}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
