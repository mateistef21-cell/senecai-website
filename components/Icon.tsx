import type { ReactNode } from "react";
import type { IconKey } from "@/lib/types";

const paths: Record<IconKey, ReactNode> = {
  // Legal — scale of justice
  legal: (
    <>
      <path d="M12 3v18" />
      <path d="M7 21h10" />
      <path d="M5 7h14" />
      <path d="M12 3L5 7M12 3l7 4" />
      <path d="M5 7l-2.5 5a2.8 2.8 0 0 0 5 0L5 7Z" />
      <path d="M19 7l-2.5 5a2.8 2.8 0 0 0 5 0L19 7Z" />
    </>
  ),
  // Technical AI — cpu/chip
  technical: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10" y="10" width="4" height="4" rx="0.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      <path d="M5.5 5.5l2 2M16.5 5.5l-2 2M5.5 18.5l2-2M16.5 18.5l-2-2" />
    </>
  ),
  // Cybersecurity — shield
  cybersecurity: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  // Governance — compass / hub
  governance: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-6 2 2-6 6-2Z" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  // AI Inventory — layered list / stack
  inventory: (
    <>
      <path d="M12 3l8 4-8 4-8-4 8-4Z" />
      <path d="M4 11l8 4 8-4" />
      <path d="M4 15l8 4 8-4" />
    </>
  ),
  // Agentic workflows — connected nodes
  agentic: (
    <>
      <circle cx="6" cy="7" r="2.3" />
      <circle cx="18" cy="7" r="2.3" />
      <circle cx="12" cy="18" r="2.3" />
      <path d="M8 8.3L10.5 16M16 8.3L13.5 16M8.3 7h7.4" />
    </>
  ),
  // Data governance & privacy — lock over database
  privacy: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.6" />
      <path d="M5 6v6c0 1.4 3.1 2.6 7 2.6M19 6v3.5" />
      <rect x="8.5" y="13.5" width="9" height="7" rx="1.4" />
      <path d="M10.7 13.5v-1.8a2.3 2.3 0 0 1 4.6 0v1.8" />
    </>
  ),
  // Operational resilience — pulse / heartbeat shield
  resilience: (
    <>
      <path d="M12 3.5l7.5 3v5.2c0 4.6-3.1 7.8-7.5 9-4.4-1.2-7.5-4.4-7.5-9V6.5l7.5-3Z" />
      <path d="M7.5 12h2l1.3-2.6L12.5 15l1.2-3h3" />
    </>
  ),
  // Security governance — lock
  security: (
    <>
      <rect x="6" y="11" width="12" height="9" rx="1.6" />
      <path d="M8.5 11V7.8a3.5 3.5 0 0 1 7 0V11" />
      <circle cx="12" cy="15.2" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
  // Compliance audits — clipboard check
  audit: (
    <>
      <rect x="6" y="4.5" width="12" height="16" rx="1.6" />
      <path d="M9.5 4.5V3.8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v.7" />
      <path d="M9 12.5l2 2 4-4.5" />
      <path d="M9 17h6" />
    </>
  ),
};

export function Icon({ name, className = "" }: { name: IconKey; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
