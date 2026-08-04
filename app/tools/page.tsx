import type { Metadata } from "next";
import { ToolsSection } from "@/components/ToolsSection";

export const metadata: Metadata = {
  title: "Free compliance-check tools — SenecAI",
  description:
    "Quick decision-tree questionnaires to check your obligations under the AI Act, GDPR, DORA, and NIS2 — no login required.",
};

export default function ToolsPage() {
  return (
    <main>
      <ToolsSection />
    </main>
  );
}
