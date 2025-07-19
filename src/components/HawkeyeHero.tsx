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
          <div className="space-y-6">
            <p className="text-hawkeye-gold text-lg italic font-medium">3 Hour ONLINE Live webinar in TAMIL</p>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-hawkeye-white leading-tight">
              HAWKEYE WEALTH
            </h1>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-hawkeye-gold leading-tight">
              CREATION MASTERCLASS
            </h2>
            <p className="text-hawkeye-white text-xl leading-relaxed">
              Learn the exact <span className="font-bold text-hawkeye-gold">strategies</span> that shaped my journey towards{" "}
              <span className="font-bold text-hawkeye-gold">financial independence</span>
            </p>
          </div>

          {/* Event details */}
          <div className="bg-gradient-to-r from-hawkeye-dark to-hawkeye-gray border-2 border-hawkeye-gold rounded-xl p-8 space-y-6 shadow-gold">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-hawkeye-gold rounded-full flex items-center justify-center">
                <Calendar className="text-hawkeye-black w-6 h-6" />
              </div>
              <span className="text-hawkeye-white font-semibold text-lg">20th July, 11 AM</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-hawkeye-gold rounded-full flex items-center justify-center">
                <Clock className="text-hawkeye-black w-6 h-6" />
              </div>
              <span className="text-hawkeye-white font-semibold text-lg">3 hrs</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-hawkeye-gold rounded-full flex items-center justify-center">
                <Shield className="text-hawkeye-black w-6 h-6" />
              </div>
              <span className="text-hawkeye-white font-semibold text-lg">7-days Refund Guarantee</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <Button 
              variant="hero" 
              size="xl"
              className="w-full lg:w-auto text-xl font-bold"
              onClick={() => window.open("https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true", "_blank")}
            >
              Book Your Seat
            </Button>
            <Button 
              variant="danger" 
              size="xl"
              className="w-full lg:w-auto ml-0 lg:ml-4 text-xl font-bold animate-pulse"
              onClick={() => window.open("https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true", "_blank")}
            >
              98% Seats Booked
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 text-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-hawkeye-gold rounded-full flex items-center justify-center">
                <Users className="text-hawkeye-black w-6 h-6" />
              </div>
              <span className="text-hawkeye-white font-bold">600K+</span>
            </div>
            <div className="text-hawkeye-white">
              <span className="text-hawkeye-gold font-bold">2L+</span> Students Enrolled
            </div>
          </div>
        </div>

        {/* Right content - Mentor image */}
        <div className="relative">
          <div className="text-center space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-hawkeye-gold to-hawkeye-gold-light rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src={hariharanWolfie} 
                alt="Hariharan aka Wolfie" 
                className="relative w-96 h-96 object-cover rounded-full mx-auto border-4 border-hawkeye-gold shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              {/* Achievement badges */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-hawkeye-gold to-hawkeye-gold-light text-hawkeye-black px-4 py-3 rounded-full font-bold text-lg shadow-lg">
                600K+
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-hawkeye-gold to-hawkeye-gold-light text-hawkeye-black px-4 py-3 rounded-full font-bold text-lg shadow-lg">
                2L+ Students
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-hawkeye-gold text-xl font-semibold">LIVE WEBINAR BY</p>
              <h3 className="text-3xl font-display font-bold text-hawkeye-white">HARIHARAN aka WOLFIE</h3>
              <div className="w-40 h-1 bg-gradient-to-r from-hawkeye-gold to-hawkeye-gold-light mx-auto rounded-full"></div>
              <p className="text-hawkeye-white font-bold text-lg">CEO of Hawkeye</p>
              <p className="text-hawkeye-gray text-lg">Tamilnadu's #1 comprehensive finance and trading community</p>
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