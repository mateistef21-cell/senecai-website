import { Hero } from "@/components/Hero";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { MethodSection } from "@/components/MethodSection";
import { TeamSection } from "@/components/TeamSection";
import { PlaceholderSection } from "@/components/PlaceholderSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseSection />
      <WhatWeDoSection />
      <MethodSection />
      <TeamSection />
      <PlaceholderSection id="testimonials" section="testimonials" tone="white" />
      <PlaceholderSection id="faq" section="faq" tone="cream" />
      <FinalCtaSection />
    </main>
  );
}
