import { Button } from "@/components/ui/button";
import hariharanWolfie from "@/assets/hariharan-wolfie.jpg";

export const HawkeyeHero = () => {
  return (
    <div className="min-h-screen bg-hawkeye-black relative overflow-hidden">
      {/* Top yellow banner - EXACT match */}
      <div className="bg-hawkeye-gold text-hawkeye-black text-center py-3 font-bold text-lg">
        LAST DATE TO REGISTER: <span className="text-hawkeye-red font-black">JULY 20th, 2025</span>
      </div>

      {/* Main hero section - EXACT layout match */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content - EXACT text and styling */}
          <div className="space-y-8 max-w-2xl">
            {/* Header text */}
            <div className="space-y-4">
              <p className="text-hawkeye-gold text-xl font-medium italic tracking-wide">
                3 Hour ONLINE Live webinar in TAMIL
              </p>
              <h1 className="text-6xl lg:text-7xl font-display font-black text-hawkeye-white leading-none tracking-tight">
                HAWKEYE WEALTH
              </h1>
              <h2 className="text-4xl lg:text-5xl font-display font-black text-hawkeye-gold leading-none tracking-tight">
                CREATION MASTERCLASS
              </h2>
              <p className="text-hawkeye-white text-xl leading-relaxed font-medium">
                Learn the exact <span className="font-bold text-hawkeye-gold">strategies</span> that shaped my journey towards{" "}
                <span className="font-bold text-hawkeye-gold">financial independence</span>
              </p>
            </div>

            {/* Event info box - EXACT styling */}
            <div className="bg-hawkeye-gold/10 border-2 border-hawkeye-gold rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-hawkeye-gold rounded-md"></div>
                <span className="text-hawkeye-white font-bold text-lg">3rd August, 11 AM</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-hawkeye-gold rounded-md"></div>
                <span className="text-hawkeye-white font-bold text-lg">3 hrs</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-hawkeye-gold rounded-md"></div>
                <span className="text-hawkeye-white font-bold text-lg">7-days Refund Guarantee</span>
              </div>
            </div>

            {/* CTA Buttons - EXACT styling */}
            <div className="space-y-4">
              <Button 
                className="bg-hawkeye-gold text-hawkeye-black hover:bg-hawkeye-gold-light font-black text-xl py-8 px-12 rounded-full border-4 border-hawkeye-gold-dark shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true", "_blank")}
              >
                Book Your Seat
              </Button>
              <Button 
                className="bg-hawkeye-red text-hawkeye-white hover:bg-red-600 font-black text-xl py-6 px-10 rounded-full ml-4 animate-pulse shadow-2xl"
                onClick={() => window.open("https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true", "_blank")}
              >
                98% Seats Booked
              </Button>
            </div>
          </div>

          {/* Right content - EXACT mentor image layout */}
          <div className="relative flex flex-col items-center space-y-8">
            {/* Mentor photo with achievement badges - EXACT positioning */}
            <div className="relative">
              <img 
                src={hariharanWolfie} 
                alt="Hariharan aka Wolfie" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-hawkeye-gold shadow-2xl"
              />
              
              {/* Achievement badges - EXACT positioning from reference */}
              <div className="absolute -top-4 -right-8 bg-hawkeye-white text-hawkeye-black px-4 py-2 rounded-lg font-black text-sm shadow-lg border-2 border-hawkeye-gold">
                <div className="text-center">
                  <div className="text-hawkeye-gold font-bold">Hariharan K</div>
                  <div className="text-xs">Founder & CEO of HawkEye</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-8 bg-hawkeye-white text-hawkeye-black px-4 py-2 rounded-lg font-black text-sm shadow-lg border-2 border-hawkeye-gold">
                <div className="text-center">
                  <div className="text-hawkeye-gold font-bold text-lg">600K+</div>
                  <div className="text-xs">Community Members</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-12 bg-hawkeye-white text-hawkeye-black px-3 py-2 rounded-lg font-black text-xs shadow-lg border-2 border-hawkeye-gold">
                <div className="text-center">
                  <div className="text-hawkeye-gold font-bold">2L+</div>
                  <div className="text-xs">Students Enrolled</div>
                </div>
              </div>
            </div>
            
            {/* Mentor details - EXACT text styling */}
            <div className="text-center space-y-3">
              <p className="text-hawkeye-gold text-lg font-bold tracking-wide">LIVE WEBINAR BY</p>
              <h3 className="text-3xl lg:text-4xl font-display font-black text-hawkeye-gold">HARIHARAN aka WOLFIE</h3>
              <div className="w-32 h-1 bg-hawkeye-gold mx-auto rounded-full"></div>
              <p className="text-hawkeye-white font-bold text-lg">CEO of Hawkeye</p>
              <p className="text-hawkeye-gray text-base max-w-md">Tamilnadu's #1 comprehensive finance and trading community</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-hawkeye-gold via-transparent to-hawkeye-gold"></div>
      </div>
    </div>
  );
};