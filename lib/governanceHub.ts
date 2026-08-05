import type { Locale } from "./types";

export interface HubCapability {
  id: string;
  label: string;
}

export interface HubNode {
  id: string;
  label: string;
  mandatory: boolean;
  capabilityIds: string[];
}

export interface GovernanceHubData {
  hubTitle: string;
  capabilities: HubCapability[];
  nodes: HubNode[];
}

// capability ids: inventory, obligations, risk, docs, evidence, controls
const capabilitiesEn: HubCapability[] = [
  { id: "inventory", label: "AI Inventory" },
  { id: "obligations", label: "Obligations" },
  { id: "risk", label: "Risk Register" },
  { id: "docs", label: "Documentation" },
  { id: "evidence", label: "Evidence" },
  { id: "controls", label: "Controls" },
];

const capabilitiesRo: HubCapability[] = [
  { id: "inventory", label: "Inventar AI" },
  { id: "obligations", label: "Obligații" },
  { id: "risk", label: "Registru riscuri" },
  { id: "docs", label: "Documentație" },
  { id: "evidence", label: "Dovezi" },
  { id: "controls", label: "Controale" },
];

const nodesBase: Omit<HubNode, "label">[] = [
  { id: "ai-act", mandatory: true, capabilityIds: ["inventory", "risk", "docs"] },
  { id: "gdpr", mandatory: true, capabilityIds: ["obligations", "docs", "evidence"] },
  { id: "dora", mandatory: true, capabilityIds: ["risk", "obligations", "evidence"] },
  { id: "nis2", mandatory: true, capabilityIds: ["controls", "risk", "obligations"] },
  { id: "cra", mandatory: true, capabilityIds: ["controls", "evidence"] },
  { id: "iso42001", mandatory: false, capabilityIds: ["obligations", "controls"] },
  { id: "iso27001", mandatory: false, capabilityIds: ["controls", "risk", "docs"] },
];

const nodeLabels: Record<string, string> = {
  "ai-act": "AI Act",
  gdpr: "GDPR",
  dora: "DORA",
  nis2: "NIS2",
  cra: "CRA",
  iso42001: "ISO 42001",
  iso27001: "ISO 27001",
};

function buildNodes(): HubNode[] {
  return nodesBase.map((n) => ({ ...n, label: nodeLabels[n.id] }));
}

export const governanceHub: Record<Locale, GovernanceHubData> = {
  en: {
    hubTitle: "SenecAI Governance Hub",
    capabilities: capabilitiesEn,
    nodes: buildNodes(),
  },
  ro: {
    hubTitle: "SenecAI Governance Hub",
    capabilities: capabilitiesRo,
    nodes: buildNodes(),
  },
};
