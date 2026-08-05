"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "@/lib/LocaleContext";
import { governanceHub } from "@/lib/governanceHub";

const HUB_R = 16;
const NODE_R = 40;
const CONTROL_R = (HUB_R + NODE_R) / 2;
const CONTROL_OFFSET_DEG = -12;

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function point(radius: number, angleDeg: number) {
  const rad = toRad(angleDeg);
  return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) };
}

export function GovernanceHubDiagram() {
  const { locale } = useLocale();
  const data = governanceHub[locale];

  const containerRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [started, setStarted] = useState(false);
  const [nodeRevealCount, setNodeRevealCount] = useState(0);
  const [linesDrawn, setLinesDrawn] = useState(false);
  const [glowing, setGlowing] = useState(false);
  const [pathLengths, setPathLengths] = useState<number[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const geometry = useMemo(() => {
    const n = data.nodes.length;
    return data.nodes.map((node, i) => {
      const angle = -90 + i * (360 / n);
      const nodePoint = point(NODE_R, angle);
      const hubEdge = point(HUB_R, angle);
      const control = point(CONTROL_R, angle + CONTROL_OFFSET_DEG);
      return { node, nodePoint, hubEdge, control, angle };
    });
  }, [data.nodes]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || started) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    const lengths = pathRefs.current.map((p) => p?.getTotalLength() ?? 0);
    setPathLengths(lengths);
  }, [geometry]);

  useEffect(() => {
    if (!started) return;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const n = geometry.length;

    for (let i = 0; i < n; i++) {
      timeouts.push(setTimeout(() => setNodeRevealCount((c) => Math.max(c, i + 1)), 300 + i * 110));
    }
    const nodesDoneAt = 300 + n * 110 + 150;
    timeouts.push(setTimeout(() => setLinesDrawn(true), nodesDoneAt));
    timeouts.push(setTimeout(() => setGlowing(true), nodesDoneAt + n * 110 + 650));

    return () => timeouts.forEach(clearTimeout);
  }, [started, geometry.length]);

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-xl">
      <div className="relative aspect-square w-full">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          {geometry.map(({ node, nodePoint, hubEdge, control }, i) => {
            const isHovered = hoveredId === node.id;
            const isDimmed = hoveredId !== null && !isHovered;
            const length = pathLengths[i] ?? 0;
            return (
              <path
                key={node.id}
                ref={(el) => {
                  pathRefs.current[i] = el;
                }}
                d={`M ${nodePoint.x} ${nodePoint.y} Q ${control.x} ${control.y} ${hubEdge.x} ${hubEdge.y}`}
                fill="none"
                stroke="#C9A24B"
                strokeWidth={isHovered ? 0.7 : 0.45}
                strokeLinecap="round"
                className={glowing && !isHovered ? "animate-line-pulse" : ""}
                style={{
                  strokeDasharray: length || undefined,
                  strokeDashoffset: length ? (linesDrawn ? 0 : length) : undefined,
                  opacity: isDimmed ? 0.2 : 1,
                  transition: `stroke-dashoffset 0.7s ease-out ${i * 0.11}s, opacity 0.3s ease, stroke-width 0.2s ease`,
                }}
              />
            );
          })}
        </svg>

        <div
          className={`absolute left-1/2 top-1/2 flex flex-col items-center justify-center rounded-full border border-gold-300 bg-white p-3 text-center transition-opacity duration-500 ${
            started ? "opacity-100" : "opacity-0"
          } ${glowing ? "animate-hub-glow" : "shadow-card"}`}
          style={{ width: `${HUB_R * 2}%`, height: `${HUB_R * 2}%`, transform: "translate(-50%, -50%)" }}
        >
          <p className="font-headline text-[9px] font-extrabold leading-tight text-ink sm:text-[11px]">{data.hubTitle}</p>
          <div className="mt-1.5 grid grid-cols-2 gap-x-1.5 gap-y-1 sm:mt-2 sm:gap-x-2 sm:gap-y-1.5">
            {data.capabilities.map((cap) => {
              const active = hoveredId ? geometry.find((g) => g.node.id === hoveredId)?.node.capabilityIds.includes(cap.id) : false;
              return (
                <span
                  key={cap.id}
                  className={`rounded-full px-1.5 py-0.5 text-[6px] font-semibold leading-none transition-colors duration-200 sm:text-[8px] ${
                    active ? "bg-gold-500 text-ink" : "bg-cream-100 text-slate-light"
                  }`}
                >
                  {cap.label}
                </span>
              );
            })}
          </div>
        </div>

        {geometry.map(({ node, nodePoint }, i) => {
          const revealed = nodeRevealCount > i;
          const isHovered = hoveredId === node.id;
          const isDimmed = hoveredId !== null && !isHovered;
          return (
            <button
              key={node.id}
              type="button"
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(node.id)}
              onBlur={() => setHoveredId(null)}
              onClick={() => setHoveredId((h) => (h === node.id ? null : node.id))}
              className={`absolute w-[92px] rounded-xl border bg-white px-2.5 py-2 text-center shadow-card transition-all duration-300 sm:w-[104px] ${
                node.mandatory ? "border-solid" : "border-dashed"
              } ${isHovered ? "z-20 scale-110 border-gold-500 shadow-pop" : "z-10 border-gold-300"}`}
              style={{
                left: `${nodePoint.x}%`,
                top: `${nodePoint.y}%`,
                transform: `translate(-50%, -50%) scale(${revealed ? (isHovered ? 1.1 : 1) : 0.6})`,
                opacity: isDimmed ? 0.35 : revealed ? 1 : 0,
                transitionDelay: revealed ? "0s" : `${i * 0.03}s`,
              }}
            >
              <span className="block font-headline text-xs font-bold text-ink">{node.label}</span>
              {!node.mandatory && (
                <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-wide text-gold-600">
                  {locale === "ro" ? "voluntar" : "voluntary"}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
