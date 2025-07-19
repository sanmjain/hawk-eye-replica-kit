import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import hariharanWolfie from "@/assets/hariharan-wolfie.jpg";

export const MentorSection = () => {
  return (
    <div className="bg-hawkeye-dark py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-hawkeye-gold">
            Meet Your Mentor
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={hariharanWolfie} 
              alt="Hariharan aka Wolfie - Mentor" 
              className="w-full max-w-md mx-auto rounded-lg border-4 border-hawkeye-gold shadow-gold"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-hawkeye-white text-lg leading-relaxed">
                <span className="font-bold text-hawkeye-gold">Hariharan aka Wolfie</span> is the founder of{" "}
                <span className="font-bold text-hawkeye-gold">Hawkeye Tamil Trading and Finance Community</span> and Tamil Nadu's top{" "}
                <span className="font-bold text-hawkeye-gold">Finance & Trading content creator</span>.
              </p>
              
              <p className="text-hawkeye-gray text-lg leading-relaxed">
                My passion for accelerating people towards financial literacy and consequentially financial independence has lead to me and my team working on Hawkeye - an one of a kind tamil trading community with several comprehensive features designed to make you succeed
              </p>
            </div>

            <div className="bg-hawkeye-black border border-hawkeye-gold rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-hawkeye-gold rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-hawkeye-black" />
                </div>
                <div>
                  <h3 className="text-hawkeye-white font-bold text-lg">Exclusive Bonuses</h3>
                  <p className="text-hawkeye-gold font-semibold">Early bird offers worth ₹4,999</p>
                  <p className="text-hawkeye-gray text-sm">Exclusive limited-time early bird offers are provided at the end of the webinar.</p>
                </div>
              </div>
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
    </div>
  );
};