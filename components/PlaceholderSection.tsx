"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";

export function PlaceholderSection({
  id,
  section,
  tone = "white",
}: {
  id: string;
  section: "testimonials" | "faq";
  tone?: "white" | "cream";
}) {
  const { t } = useLocale();
  const content = t[section];

  return (
    <Section id={id} eyebrow={content.eyebrow} title={content.title} tone={tone}>
      <div className="max-w-2xl rounded-2xl border border-dashed border-gold-300 bg-gold-50/60 p-6">
        <p className="text-[15px] leading-relaxed text-slate">{content.body}</p>
      </div>
    </Section>
  );
}
