import { Hero } from "@/components/Hero";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { WhyNowAndWhoWeWorkSection } from "@/components/WhyNowAndWhoWeWorkSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { OurServicesSection } from "@/components/OurServicesSection";
import { MethodSection } from "@/components/MethodSection";
import { TeamSection } from "@/components/TeamSection";
import { PlaceholderSection } from "@/components/PlaceholderSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseSection />
      <WhyNowAndWhoWeWorkSection />
      <TestimonialsSection />
      <OurServicesSection />
      <MethodSection />
      <TeamSection />
      <PlaceholderSection id="faq" section="faq" tone="cream" />
      <FinalCtaSection />
    </main>
  );
}
