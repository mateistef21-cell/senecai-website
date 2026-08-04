"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";

export function ResourceListPage({ pageKey }: { pageKey: "resources" | "research" }) {
  const { t } = useLocale();
  const page = t[pageKey];

  return (
    <Section eyebrow={page.eyebrow} title={page.title} intro={page.intro} tone="white">
      <div className="grid gap-5 sm:grid-cols-2">
        {page.links.map((link) => (
          <div key={link.label} className="rounded-2xl border border-dashed border-gold-300 bg-gold-50/50 p-6">
            <p className="font-headline text-base font-bold text-ink">{link.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">{link.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
