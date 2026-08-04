import type { Metadata } from "next";
import { ResourceListPage } from "@/components/ResourceListPage";

export const metadata: Metadata = {
  title: "Resources — SenecAI",
  description: "In-depth explainers on the EU digital rulebook: the AI Act, DORA, NIS2, ISO 27001, and ISO 42001.",
};

export default function ResourcesPage() {
  return (
    <main>
      <ResourceListPage pageKey="resources" />
    </main>
  );
}
