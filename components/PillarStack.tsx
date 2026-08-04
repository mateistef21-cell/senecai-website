"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import type { PillarContent } from "@/lib/types";

const OFFSETS = [
  { x: 0, y: 0, r: 0, scale: 1, opacity: 1, z: 40 },
  { x: 46, y: 26, r: 5, scale: 0.95, opacity: 0.85, z: 30 },
  { x: 86, y: 50, r: 9, scale: 0.9, opacity: 0.65, z: 20 },
  { x: 122, y: 76, r: 13, scale: 0.85, opacity: 0.48, z: 10 },
];

function BackCardPreview({ pillar }: { pillar: PillarContent }) {
  return (
    <div className="flex h-full flex-col p-6 sm:p-7">
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-700">
        <Icon name={pillar.icon} className="h-5 w-5" />
      </span>
      <h3 className="font-headline text-lg font-bold text-ink">{pillar.title}</h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-slate">{pillar.short}</p>
    </div>
  );
}

function CardBody({
  pillar,
  expanded,
  onToggle,
  moreLabel,
  lessLabel,
}: {
  pillar: PillarContent;
  expanded: boolean;
  onToggle: () => void;
  moreLabel: string;
  lessLabel: string;
}) {
  return (
    <div className="flex h-full flex-col p-6 sm:p-7">
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-700">
        <Icon name={pillar.icon} className="h-5 w-5" />
      </span>
      <h3 className="font-headline text-lg font-bold text-ink">{pillar.title}</h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-slate">{pillar.short}</p>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        aria-expanded={expanded}
        className="mt-4 flex w-fit items-center gap-1.5 rounded-pill border border-gold-300 px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-gold-50"
      >
        {expanded ? lessLabel : moreLabel}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}>
          <path d="M1 3l4 4 4-4" stroke="#161410" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={`mt-3 overflow-y-auto pr-1 transition-opacity duration-200 ${expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-sm leading-relaxed text-slate">{pillar.details}</p>
      </div>
    </div>
  );
}

export function PillarStack({
  pillars,
  moreLabel,
  lessLabel,
}: {
  pillars: PillarContent[];
  moreLabel: string;
  lessLabel: string;
}) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  function select(index: number) {
    if (index === active) return;
    setActive(index);
    setExpanded(false);
  }

  const others = pillars.map((_, i) => i).filter((i) => i !== active);

  return (
    <div>
      {/* Desktop: front/back fanned stack */}
      <div className="relative hidden h-[400px] lg:block">
        {others.map((pillarIndex, position) => {
          const offset = OFFSETS[position + 1];
          const pillar = pillars[pillarIndex];
          return (
            <button
              key={pillar.title}
              type="button"
              onClick={() => select(pillarIndex)}
              aria-label={`Show ${pillar.title}`}
              className="absolute left-0 top-0 h-full w-[380px] cursor-pointer rounded-2xl border border-gold-200 bg-white text-left shadow-card transition-all duration-500 ease-out hover:brightness-[0.98]"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) rotate(${offset.r}deg) scale(${offset.scale})`,
                opacity: offset.opacity,
                zIndex: offset.z,
              }}
            >
              <BackCardPreview pillar={pillar} />
            </button>
          );
        })}

        <div
          className="absolute left-0 top-0 h-full w-[380px] rounded-2xl border border-gold-300 bg-white shadow-pop transition-all duration-500 ease-out"
          style={{ transform: "translate(0px, 0px) rotate(0deg) scale(1)", zIndex: 40 }}
        >
          <CardBody
            pillar={pillars[active]}
            expanded={expanded}
            onToggle={() => setExpanded((v) => !v)}
            moreLabel={moreLabel}
            lessLabel={lessLabel}
          />
        </div>
      </div>

      {/* Mobile / tablet: single card + tap-to-swap tabs, no fanning */}
      <div className="lg:hidden">
        <div className="rounded-2xl border border-gold-300 bg-white shadow-card">
          <CardBody
            pillar={pillars[active]}
            expanded={expanded}
            onToggle={() => setExpanded((v) => !v)}
            moreLabel={moreLabel}
            lessLabel={lessLabel}
          />
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {pillars.map((pillar, i) => (
            <button
              key={pillar.title}
              type="button"
              onClick={() => select(i)}
              aria-pressed={i === active}
              aria-label={pillar.title}
              className={`flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 transition-colors ${
                i === active ? "border-gold-500 bg-gold-50" : "border-gold-200 bg-white"
              }`}
            >
              <Icon name={pillar.icon} className={`h-4 w-4 ${i === active ? "text-gold-700" : "text-gold-400"}`} />
              <span className={`text-center text-[10px] font-semibold leading-tight ${i === active ? "text-ink" : "text-slate-light"}`}>
                {pillar.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
