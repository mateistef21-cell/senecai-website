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
            className={`flex items-start gap-4 rounded-2xl border p-5 shadow-card transition-shadow hover:shadow-pop ${
              member.founder ? "border-gold-400 bg-gold-50" : "border-gold-200 bg-white"
            }`}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500 font-headline text-sm font-extrabold text-ink">
              {initials(member.name)}
            </div>
            <div>
              <p className="font-headline text-[15px] font-bold text-ink">{member.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
