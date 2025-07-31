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
    <div className="bg-hawkeye-gold py-12 md:py-20">
      <div className="container mx-auto px-2 md:px-4">
        <div className="max-w-xs md:max-w-3xl mx-auto text-center space-y-8 md:space-y-12">
          {/* Price Display */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <span className="text-4xl md:text-8xl font-display font-bold text-hawkeye-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                ₹ 199
              </span>
              <span className="text-xl md:text-4xl text-hawkeye-black/60 line-through" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                ₹ 499
              </span>
            </div>
            <div className="bg-hawkeye-red text-hawkeye-white px-4 py-1 md:px-6 md:py-2 rounded-full font-bold text-sm md:text-lg inline-block animate-pulse" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              60% OFF - Limited Time!
            </div>
          </div>

          {/* Countdown Timer */}
          <div>
            <h3 className="text-lg md:text-2xl font-display font-bold text-hawkeye-black mb-4 md:mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>⏰ Event Starts In:</h3>
            <div className="grid grid-cols-4 gap-2 md:gap-6 max-w-xs md:max-w-lg mx-auto">
              {['days', 'hours', 'minutes', 'seconds'].map(unit => (
                <div key={unit} className="text-center bg-hawkeye-black rounded-lg md:rounded-xl p-2 md:p-4 shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <div className="text-2xl md:text-5xl font-display font-bold text-hawkeye-gold">
                    {timeLeft[unit].toString().padStart(2, '0')}
                  </div>
                  <div className="text-hawkeye-white text-[10px] md:text-sm uppercase tracking-wide mt-1 md:mt-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {unit.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-2 md:space-y-4">
            <h3 className="text-base md:text-2xl font-display font-bold text-hawkeye-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              📅 Sunday, 3rd August 2025, 11am - 2pm
            </h3>
          </div>

          {/* Final CTA */}
          <div className="space-y-3 md:space-y-4">
            <Button 
              className="bg-blue-600 text-white hover:bg-blue-700 text-lg md:text-2xl py-4 md:py-8 px-8 md:px-16 font-bold shadow-2xl hover:scale-110 transition-all duration-300 rounded-lg"
              onClick={() => window.open("https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true", "_blank")}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Register Now
            </Button>
            <p className="text-hawkeye-black/70 font-semibold text-xs md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              ⚡ Only few seats left! Don't miss out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};