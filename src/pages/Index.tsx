import { HawkeyeHero } from "@/components/HawkeyeHero";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import { BrandingSection } from "@/components/BrandingSection";
import { VoicesOfSuccessSection } from "@/components/VoicesOfSuccessSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import { RelianceSection } from "@/components/RelianceSection";
import { WebinarForSection } from "@/components/WebinarForSection";
import { WhatYouLearnSection } from "@/components/WhatYouLearnSection";
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
      <VoicesOfSuccessSection />
      <ProblemsSection />
      <RelianceSection />
      <WebinarForSection />
      <WhatYouLearnSection />
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
