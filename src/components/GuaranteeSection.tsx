import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <div className="bg-hawkeye-dark py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-hawkeye-gold rounded-full flex items-center justify-center mx-auto">
            <ShieldCheck className="w-10 h-10 text-hawkeye-black" />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-hawkeye-gold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              100% Money Back Guarantee
            </h2>
            <p className="text-hawkeye-white text-lg leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              If you are unhappy with the webinar because we couldn't teach you anything new you may claim our{" "}
              <span className="font-bold text-hawkeye-gold" style={{ fontFamily: 'Montserrat, sans-serif' }}>100% money back guarantee</span> and get a full refund{" "}
              <span className="font-bold text-hawkeye-gold" style={{ fontFamily: 'Montserrat, sans-serif' }}>within 7 days of your purchase</span> as per our Refund Policy.
            </p>
          </div>

          <Button 
            variant="hero"
            onClick={() => window.open("https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true", "_blank")}
          >
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};