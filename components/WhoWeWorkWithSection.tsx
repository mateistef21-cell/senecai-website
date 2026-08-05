"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";
import { Icon } from "./Icon";

export function WhoWeWorkWithSection() {
  const { t } = useLocale();

  return (
    <Section id="who-we-work-with" tone="white">
      <h2 className="text-center font-headline text-2xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-3xl">
        {t.whoWeWorkWith.title}
      </h2>

      <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
        {t.whoWeWorkWith.cards.map((card, i) => (
          <div
            key={card.title}
            className="group animate-fade-in-up rounded-2xl border border-gold-200 bg-cream-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-pop"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-700 transition-transform duration-300 group-hover:scale-110">
              <Icon name={card.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-headline text-lg font-bold text-ink">{card.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">{card.description}</p>
            <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-gold-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {"→"}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
