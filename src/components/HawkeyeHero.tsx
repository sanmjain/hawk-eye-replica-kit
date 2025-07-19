import { Button } from "@/components/ui/button";
import { Calendar, Clock, Shield, Users } from "lucide-react";
import hariharanWolfie from "@/assets/hariharan-wolfie.jpg";

export const HawkeyeHero = () => {
  return (
    <div className="min-h-screen bg-hawkeye-black relative overflow-hidden">
      {/* Top registration banner */}
      <div className="bg-hawkeye-gold text-hawkeye-black text-center py-2 font-bold">
        LAST DATE TO REGISTER: <span className="text-hawkeye-red">JULY 19th, 2025</span>
      </div>

      {/* Main hero section */}
      <div className="container mx-auto px-4 py-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-hawkeye-gold text-lg italic">3 Hour ONLINE Live webinar in TAMIL</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-hawkeye-white">
              HAWKEYE WEALTH
            </h1>
            <h2 className="text-2xl lg:text-4xl font-bold text-hawkeye-gold">
              CREATION MASTERCLASS
            </h2>
            <p className="text-hawkeye-white text-lg">
              Learn the exact <span className="font-bold text-hawkeye-gold">strategies</span> that shaped my journey towards{" "}
              <span className="font-bold text-hawkeye-gold">financial independence</span>
            </p>
          </div>

          {/* Event details */}
          <div className="bg-hawkeye-dark border border-hawkeye-gold rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <Calendar className="text-hawkeye-gold w-6 h-6" />
              <span className="text-hawkeye-white font-semibold">20th July, 11 AM</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="text-hawkeye-gold w-6 h-6" />
              <span className="text-hawkeye-white font-semibold">3 hrs</span>
            </div>
            <div className="flex items-center gap-4">
              <Shield className="text-hawkeye-gold w-6 h-6" />
              <span className="text-hawkeye-white font-semibold">7-days Refund Guarantee</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <Button 
              variant="hero" 
              className="w-full lg:w-auto"
              onClick={() => window.open("https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true", "_blank")}
            >
              Book Your Seat
            </Button>
            <Button 
              variant="danger" 
              className="w-full lg:w-auto ml-0 lg:ml-4"
              onClick={() => window.open("https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true", "_blank")}
            >
              98% Seats Booked
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Users className="text-hawkeye-gold w-6 h-6" />
              <span className="text-hawkeye-white font-bold">600K+</span>
            </div>
            <div className="text-hawkeye-white">
              <span className="text-hawkeye-gold font-bold">2L+</span> Students Enrolled
            </div>
          </div>
        </div>

        {/* Right content - Mentor image */}
        <div className="relative">
          <div className="text-center space-y-6">
            <div className="relative">
              <img 
                src={hariharanWolfie} 
                alt="Hariharan aka Wolfie" 
                className="w-80 h-80 object-cover rounded-full mx-auto border-4 border-hawkeye-gold shadow-gold"
              />
              {/* Achievement badges */}
              <div className="absolute -top-4 -right-4 bg-hawkeye-gold text-hawkeye-black px-3 py-2 rounded-full font-bold text-sm">
                600K+
              </div>
              <div className="absolute -bottom-4 -left-4 bg-hawkeye-gold text-hawkeye-black px-3 py-2 rounded-full font-bold text-sm">
                2L+ Students
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-hawkeye-gold text-lg">LIVE WEBINAR BY</p>
              <h3 className="text-2xl font-bold text-hawkeye-white">HARIHARAN aka WOLFIE</h3>
              <div className="w-32 h-1 bg-hawkeye-gold mx-auto"></div>
              <p className="text-hawkeye-white font-semibold">CEO of Hawkeye</p>
              <p className="text-hawkeye-gray">Tamilnadu's #1 comprehensive finance and trading community</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-hawkeye-gold to-transparent"></div>
      </div>
    </div>
  );
};