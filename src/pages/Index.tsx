import { HawkeyeHero } from "@/components/HawkeyeHero";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import { BrandingSection } from "@/components/BrandingSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import { WebinarForSection } from "@/components/WebinarForSection";
import { CurriculumSection } from "@/components/CurriculumSection";
import { MentorSection } from "@/components/MentorSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { PricingSection } from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-hawkeye-black">
      <HawkeyeHero />
      <PhotoMarquee />
      <BrandingSection />
      <ProblemsSection />
      <WebinarForSection />
      <CurriculumSection />
      <MentorSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FAQSection />
      <PricingSection />
    </div>
  );
};

export default Index;
