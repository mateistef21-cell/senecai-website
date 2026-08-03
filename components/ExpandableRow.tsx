"use client";

import { useState } from "react";
import type { ExpandableItem } from "@/lib/types";

export function ExpandableRow({
  item,
  moreLabel = "More details",
  lessLabel = "Show less",
  eyebrow,
}: {
  item: ExpandableItem;
  moreLabel?: string;
  lessLabel?: string;
  eyebrow?: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `panel-${item.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="border-b border-gold-200 py-6 first:pt-0 last:border-b-0">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="flex-1">
          {eyebrow && (
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.1em] text-gold-600">{eyebrow}</p>
          )}
          <h3 className="font-headline text-lg font-bold text-ink">{item.title}</h3>
          <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-slate">{item.short}</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex shrink-0 items-center gap-1.5 self-start rounded-pill border border-gold-300 px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-gold-50 sm:mt-1"
        >
          {open ? lessLabel : moreLabel}
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <path d="M1 3l4 4 4-4" stroke="#161410" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div
        id={panelId}
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl text-[15px] leading-relaxed text-slate">{item.details}</p>
        </div>
      </div>
    </div>
  );
}
