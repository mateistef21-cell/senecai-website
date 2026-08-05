"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";
import { GovernanceHubDiagram } from "./GovernanceHubDiagram";

export function WhyNowSection() {
  const { t } = useLocale();

  return (
    <Section id="why-now" tone="cream">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-headline text-2xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-3xl">
          {t.whyNow.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate">{t.whyNow.body}</p>
      </div>

      <div className="mt-14">
        <GovernanceHubDiagram />
      </div>
    </Section>
  );
}
