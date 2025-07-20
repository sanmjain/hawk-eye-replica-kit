import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to July 20th, 2025 11:00 AM
    const targetDate = new Date('2025-07-20T11:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-hawkeye-gold py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Price Display */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-6">
              <span className="text-6xl lg:text-8xl font-display font-bold text-hawkeye-black">
                ₹ 199
              </span>
              <span className="text-3xl lg:text-4xl text-hawkeye-black/60 line-through">
                ₹ 499
              </span>
            </div>
            <div className="bg-hawkeye-red text-hawkeye-white px-6 py-2 rounded-full font-bold text-lg inline-block animate-pulse">
              60% OFF - Limited Time!
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-hawkeye-black/10 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-hawkeye-black mb-6">⏰ Event Starts In:</h3>
            <div className="grid grid-cols-4 gap-6 max-w-lg mx-auto">
              <div className="text-center bg-hawkeye-black rounded-xl p-4 shadow-lg">
                <div className="text-4xl lg:text-5xl font-display font-bold text-hawkeye-gold">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-hawkeye-white text-sm uppercase tracking-wide mt-2">
                  DAYS
                </div>
              </div>
              <div className="text-center bg-hawkeye-black rounded-xl p-4 shadow-lg">
                <div className="text-4xl lg:text-5xl font-display font-bold text-hawkeye-gold">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-hawkeye-white text-sm uppercase tracking-wide mt-2">
                  HOURS
                </div>
              </div>
              <div className="text-center bg-hawkeye-black rounded-xl p-4 shadow-lg">
                <div className="text-4xl lg:text-5xl font-display font-bold text-hawkeye-gold">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-hawkeye-white text-sm uppercase tracking-wide mt-2">
                  MINUTES
                </div>
              </div>
              <div className="text-center bg-hawkeye-black rounded-xl p-4 shadow-lg">
                <div className="text-4xl lg:text-5xl font-display font-bold text-hawkeye-gold">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-hawkeye-white text-sm uppercase tracking-wide mt-2">
                  SECONDS
                </div>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-hawkeye-black">
              📅 Sunday, 3rd August 2025, 11am - 2pm
            </h3>
          </div>

          {/* Final CTA */}
          <div className="space-y-4">
            <Button 
              className="bg-blue-600 text-white hover:bg-blue-700 text-2xl py-8 px-16 font-bold shadow-2xl hover:scale-110 transition-all duration-300 rounded-lg"
              onClick={() => window.open("https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true", "_blank")}
            >
              Register Now
            </Button>
            <p className="text-hawkeye-black/70 font-semibold">
              ⚡ Only few seats left! Don't miss out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};