import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { MethodSection } from "@/components/MethodSection";
import { TeamSection } from "@/components/TeamSection";
import { ToolsSection } from "@/components/ToolsSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { PlaceholderSection } from "@/components/PlaceholderSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <IntroSection />
        <ServicesSection />
        <MethodSection />
        <TeamSection />
        <PlaceholderSection id="testimonials" section="testimonials" tone="white" />
        <ResourcesSection />
        <ToolsSection />
        <PlaceholderSection id="faq" section="faq" tone="cream" />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
