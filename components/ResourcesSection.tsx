"use client";

import { useLocale } from "@/lib/LocaleContext";
import { Section } from "./Section";
import type { ResourceLink } from "@/lib/types";

function ResourceList({ links }: { links: ResourceLink[] }) {
  return (
    <ul className="flex flex-col divide-y divide-gold-200 rounded-2xl border border-gold-200 bg-white">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-gold-50"
          >
            <span>
              <span className="block text-sm font-bold text-ink">{link.label}</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-slate">{link.description}</span>
            </span>
            <span
              aria-hidden="true"
              className="shrink-0 text-gold-500 transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ResourcesSection() {
  const { t } = useLocale();

  return (
    <Section id="resources" eyebrow={t.resources.eyebrow} tone="cream">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-5 font-headline text-2xl font-extrabold tracking-tight text-ink">
            {t.resources.inDepthTitle}
          </h3>
          <ResourceList links={t.resources.inDepthLinks} />
        </div>
        <div>
          <h3 className="mb-5 font-headline text-2xl font-extrabold tracking-tight text-ink">
            {t.resources.researchTitle}
          </h3>
          <ResourceList links={t.resources.researchLinks} />
        </div>
      </div>
    </Section>
  );
}
