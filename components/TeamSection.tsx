"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TeamSection() {
  const { t } = useLocale();

  return (
    <Section id="team" eyebrow={t.team.eyebrow} title={t.team.title} tone="cream">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.team.members.map((member) => (
          <div
            key={member.name}
            className={`flex flex-col items-center rounded-2xl border p-6 text-center shadow-card transition-shadow hover:shadow-pop ${
              member.founder ? "border-gold-400 bg-gold-50" : "border-gold-200 bg-white"
            }`}
          >
            <div
              className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-gold-300 bg-cream-100 text-lg font-headline font-extrabold text-gold-600"
              role="img"
              aria-label={t.team.photoPlaceholder}
              title={t.team.photoPlaceholder}
            >
              {initials(member.name)}
            </div>
            <p className="mt-4 font-headline text-[15px] font-bold text-ink">{member.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-slate">{member.role}</p>
            <p className="mt-3 text-xs italic leading-relaxed text-slate-light">{t.team.bioPlaceholder}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
