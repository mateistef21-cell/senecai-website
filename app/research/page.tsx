import type { Metadata } from "next";
import { ResourceListPage } from "@/components/ResourceListPage";

export const metadata: Metadata = {
  title: "Research & Publications — SenecAI",
  description: "SenecAI's research into how AI and digital policy is developing across the EU and worldwide.",
};

export default function ResearchPage() {
  return (
    <main>
      <ResourceListPage pageKey="research" />
    </main>
  );
}
