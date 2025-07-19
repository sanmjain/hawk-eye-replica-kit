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
    <div className="bg-hawkeye-gold py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Price Display */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <span className="text-5xl lg:text-6xl font-bold text-hawkeye-black">
                ₹ 199
              </span>
              <span className="text-2xl lg:text-3xl text-hawkeye-black/60 line-through">
                ₹ 499
              </span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-hawkeye-black">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-hawkeye-black/70 text-sm uppercase tracking-wide">
                DAYS
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-hawkeye-black">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-hawkeye-black/70 text-sm uppercase tracking-wide">
                HOURS
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-hawkeye-black">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-hawkeye-black/70 text-sm uppercase tracking-wide">
                MINUTES
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-hawkeye-black">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-hawkeye-black/70 text-sm uppercase tracking-wide">
                SECONDS
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-hawkeye-black">
              Sunday, 20th July. 2025, 11am - 2pm
            </h3>
          </div>

          {/* Final CTA */}
          <Button 
            variant="goldOutline" 
            className="bg-hawkeye-black text-hawkeye-gold border-hawkeye-black hover:bg-hawkeye-gold hover:text-hawkeye-black text-xl py-6 px-12"
            onClick={() => window.open("https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true", "_blank")}
          >
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};