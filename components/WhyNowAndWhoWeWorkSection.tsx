"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";
import { GovernanceHubDiagram } from "./GovernanceHubDiagram";
import { Icon } from "./Icon";

export function WhyNowAndWhoWeWorkSection() {
  const { t } = useLocale();

  return (
    <Section id="why-now" tone="cream">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="grid items-center gap-6 sm:grid-cols-2">
            <div>
              <h2 className="font-headline text-2xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-3xl">
                {t.whyNow.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate">{t.whyNow.body}</p>
            </div>
            <div className="flex justify-center">
              <GovernanceHubDiagram compact />
            </div>
          </div>
        </div>

        <div id="who-we-work-with" className="scroll-mt-24 border-t border-gold-200 pt-14 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
          <h2 className="text-center font-headline text-2xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-3xl">
            {t.whoWeWorkWith.title}
          </h2>

          <div className="mx-auto mt-8 flex max-w-md flex-col gap-4">
            {t.whoWeWorkWith.cards.map((card, i) => (
              <div
                key={card.title}
                className="group animate-fade-in-up flex items-start gap-4 rounded-2xl border border-gold-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500 hover:shadow-pop"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={card.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-headline text-base font-bold text-ink">{card.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
