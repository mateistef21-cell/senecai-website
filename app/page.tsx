import { Hero } from "@/components/Hero";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { WhyNowSection } from "@/components/WhyNowSection";
import { WhoWeWorkWithSection } from "@/components/WhoWeWorkWithSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
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
      <WhyNowSection />
      <WhoWeWorkWithSection />
      <TestimonialsSection />
      <WhatWeDoSection />
      <MethodSection />
      <TeamSection />
      <PlaceholderSection id="faq" section="faq" tone="cream" />
      <FinalCtaSection />
    </main>
  );
}
