import { HawkeyeHero } from "@/components/HawkeyeHero";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import { BrandingSection } from "@/components/BrandingSection";
import { VoicesOfSuccessSection } from "@/components/VoicesOfSuccessSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import { WebinarForSection } from "@/components/WebinarForSection";
import { WhatYouLearnSection } from "@/components/WhatYouLearnSection";
import { MentorSection } from "@/components/MentorSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { PricingSection } from "@/components/PricingSection";
import { StickyFooterBar } from "@/components/StickyFooterBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#111112] relative overflow-hidden">
      {/* Dotted vertical stripes background - global */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="flex h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-full w-2 mx-6 border-r border-dotted border-white/30"
              style={{ borderRightWidth: '2px' }}
            ></div>
          ))}
        </div>
      </div>
      {/* Main content */}
      <div className="relative z-10">
        <HawkeyeHero />
        <PhotoMarquee />
        <BrandingSection />
        <VoicesOfSuccessSection />
        <ProblemsSection />
        <WebinarForSection />
        <WhatYouLearnSection />
        <MentorSection />
        <TestimonialsSection />
        <GuaranteeSection />
        <FAQSection />
        <PricingSection />
      </div>
      <StickyFooterBar />
    </div>
  );
};

export default Index;
