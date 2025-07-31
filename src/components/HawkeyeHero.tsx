import { Button } from "@/components/ui/button";
import hariharanWolfie from "@/assets/hariharan-wolfie.jpg";
import { Calendar, Clock, IndianRupee } from "lucide-react";
import React, { useState, useEffect } from "react";

export const HawkeyeHero = () => {
  return (
    <div className="min-h-screen bg-[#111112] relative overflow-hidden">
      {/* Dotted vertical stripes background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="flex h-full w-full justify-between">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-full w-2 mx-6 border-r border-dotted border-white/10"
              style={{ borderRightWidth: '2px' }}
            ></div>
          ))}
        </div>
      </div>
      {/* Top yellow banner - EXACT match */}
      <div className="bg-hawkeye-gold text-hawkeye-black text-center py-2 md:py-3 font-bold text-sm md:text-lg">
        <span className="animate-bounce">LAST DATE TO REGISTER: <span className="text-hawkeye-red font-black">JULY 20th, 2025</span></span>
      </div>

      {/* Main hero section - EXACT layout match */}
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left content - EXACT text and styling */}
          <div className="space-y-8 max-w-2xl order-1 lg:order-1">
            {/* Header text */}
            <div className="space-y-2 md:space-y-3 text-center md:text-left">
              <h1
                className="font-medium italic tracking-wide text-center md:text-left"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#FDCD0D',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: 1.2,
                }}
              >
                <span className="hidden md:inline" style={{ fontSize: '30px', fontStyle: 'italic', fontWeight: 500 }}>
                  3 Hour ONLINE Live webinar in TAMIL
                </span>
                <span className="inline md:hidden" style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: 500, color: '#fff' }}>
                3 Hour ONLINE Live webinar in TAMIL
                </span>
              </h1>
            </div>
            <div className="mt-16 md:mt-20 flex flex-col items-center md:items-start">
              <h1
                className="leading-none tracking-tight text-center md:text-left mb-0"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF', fontWeight: 700, textTransform: 'uppercase', margin: 0 }}
              >
                <span className="hidden md:inline" style={{ fontSize: '30px', fontStyle: 'normal', fontWeight: 700, textTransform: 'uppercase', margin: 0 }}>
                  HAWKEYE WEALTH
                </span>
                <span className="inline md:hidden" style={{ fontSize: '26px', fontStyle: 'normal', fontWeight: 700, textTransform: 'uppercase', margin: 0 }}>
                HAWKEYE WEALTH
                </span>
              </h1>
              <div style={{ height: '6px' }}></div>
              <h2 className="leading-none tracking-tight text-center md:text-left mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#FDCD0D', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
                <span className="hidden md:inline" style={{ fontSize: '30px', fontStyle: 'italic', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
                  CREATION MASTERCLASS
                </span>
                <span className="inline md:hidden" style={{ fontSize: '26px', fontStyle: 'normal', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
                CREATION MASTERCLASS
                </span>
              </h2>
            </div>
            <div className="text-center md:text-left">
              <p className="text-hawkeye-white text-sm md:text-xl leading-relaxed font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Learn the exact <span className="font-bold text-hawkeye-gold">strategies</span> that shaped my journey towards{" "}
                <span className="font-bold text-hawkeye-gold">financial independence</span>
              </p>
            </div>

            {/* Event info box - EXACT styling */}
            <div className="relative max-w-xs md:max-w-sm mx-auto my-4">
              {/* Double border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-hawkeye-gold pointer-events-none"></div>
              <div className="absolute inset-1 rounded-2xl border-2 border-hawkeye-gold/60 pointer-events-none"></div>
              <div className="relative bg-hawkeye-gold/10 rounded-2xl px-5 py-4 md:px-7 md:py-5 flex flex-col gap-4">
                <div className="flex flex-row items-center gap-4 md:gap-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-hawkeye-gold rounded-md flex items-center justify-center">
                      <Calendar color="white" size={16} />
                    </div>
                    <span className="text-hawkeye-white font-bold truncate text-base md:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>3rd August, 11 AM</span>
                  </div>
                  {/* Duration */}
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-hawkeye-gold rounded-md flex items-center justify-center">
                      <Clock color="white" size={16} />
                    </div>
                    <span className="text-hawkeye-white font-bold truncate text-base md:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>3 hrs</span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2 min-w-0 mt-1">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-hawkeye-gold rounded-md flex items-center justify-center">
                    <IndianRupee color="white" size={16} />
              </div>
                  <span className="text-hawkeye-white font-bold truncate text-base md:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>7-days Refund Guarantee</span>
              </div>
              </div>
            </div>

            {/* CTA Buttons - EXACT styling */}
            <div className="relative w-full flex justify-center items-center" style={{ perspective: 1000 }}>
              {/* Flip Button */}
              <FlipButton />
            </div>
          </div>

          {/* Right content - EXACT mentor image layout */}
          <div className="relative flex flex-col items-center space-y-4 md:space-y-8 order-2 lg:order-2">
            {/* Mentor photo with achievement badges - EXACT positioning */}
            <div className="relative">
              <img 
                src={hariharanWolfie} 
                alt="Hariharan aka Wolfie" 
                className="w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-2 md:border-4 border-hawkeye-gold shadow-2xl"
              />
              
              {/* Achievement badges - EXACT positioning from reference */}
              <div className="absolute -top-2 -right-4 md:-top-4 md:-right-8 bg-hawkeye-white text-hawkeye-black px-2 py-1 md:px-4 md:py-2 rounded-lg font-black text-xs md:text-sm shadow-lg border border-hawkeye-gold md:border-2">
                <div className="text-center">
                  <div className="text-hawkeye-gold font-bold text-xs md:text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>Hariharan K</div>
                  <div className="text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>Founder & CEO of HawkEye</div>
                </div>
              </div>
              
              <div className="absolute -bottom-2 -left-4 md:-bottom-4 md:-left-8 bg-hawkeye-white text-hawkeye-black px-2 py-1 md:px-4 md:py-2 rounded-lg font-black text-xs md:text-sm shadow-lg border border-hawkeye-gold md:border-2">
                <div className="text-center">
                  <div className="text-hawkeye-gold font-bold text-sm md:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>600K+</div>
                  <div className="text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>Community Members</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-6 md:-right-12 bg-hawkeye-white text-hawkeye-black px-2 py-1 md:px-3 md:py-2 rounded-lg font-black text-xs shadow-lg border border-hawkeye-gold md:border-2">
                <div className="text-center">
                  <div className="text-hawkeye-gold font-bold text-xs md:text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>2L+</div>
                  <div className="text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>Students Enrolled</div>
                </div>
              </div>
            </div>
            
            {/* Mentor details - EXACT text styling */}
            <div className="text-center space-y-2 md:space-y-3">
              <p className="text-hawkeye-gold text-sm md:text-lg font-bold tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>LIVE WEBINAR BY</p>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-display font-black text-hawkeye-gold" style={{ fontFamily: 'Montserrat, sans-serif' }}>HARIHARAN aka WOLFIE</h3>
              <div className="w-24 md:w-32 h-1 bg-hawkeye-gold mx-auto rounded-full" style={{ fontFamily: 'Montserrat, sans-serif' }}></div>
              <p className="text-hawkeye-white font-bold text-sm md:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>CEO of Hawkeye</p>
              <p className="text-white text-xs md:text-base max-w-md px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Tamilnadu's #1 comprehensive finance and trading community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FlipButton Component with glow, scale, flip, and progress bar
function FlipButton() {
  const [flipped, setFlipped] = useState(false);
  const [progress, setProgress] = useState(1); // 1 = 100%, 0 = 0%

  useEffect(() => {
    let animationFrameId;
    let startTime = null;
    const duration = 1800;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress);
      if (newProgress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    if (flipped) {
      setProgress(0);
      animationFrameId = requestAnimationFrame(animate);
    }

    const flipTimer = setTimeout(() => setFlipped((prev) => !prev), duration);

    return () => {
      clearTimeout(flipTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [flipped]);

  return (
    <div className="w-full flex justify-center items-center my-6" style={{ perspective: 1000, minHeight: '64px' }}>
      <div
        className={`relative w-full max-w-xs md:max-w-md h-16 md:h-20 transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? 'rotate-x-180' : ''}`}
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.7s', transform: flipped ? 'rotateX(180deg)' : 'none' }}
      >
        {/* Front (yellow) */}
        <Button
          className={`absolute inset-0 w-full h-full bg-hawkeye-gold text-hawkeye-black font-black text-base md:text-2xl py-3 md:py-6 px-4 md:px-10 rounded-full border-2 md:border-4 border-hawkeye-gold-dark shadow-xl md:shadow-2xl flex items-center justify-center [backface-visibility:hidden] transition-all duration-300 ${!flipped ? 'animate-flip-glow-once' : ''}`}
          style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: 0.5, backfaceVisibility: 'hidden', transform: !flipped ? 'scale(1.06)' : 'scale(1)' }}
          onClick={() => window.open('https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true', '_blank')}
        >
          Book Your Seat
        </Button>
        {/* Back (red) */}
        <div
          className="absolute inset-0 w-full h-full rounded-full overflow-hidden [backface-visibility:hidden] transition-all duration-300"
          style={{ transform: 'rotateX(180deg)', backfaceVisibility: 'hidden' }}
        >
          {/* Progress bar (bottom to top) */}
          <div
            className="absolute left-0 right-0 bottom-0 bg-[#ff0000] rounded-full z-10"
            style={{
              height: `${progress * 100}%`,
              transition: 'height 0.18s linear, transform 0.18s linear',
              transform: `translateY(${(1 - progress) * 100}%)`,
            }}
          ></div>
          <Button
            className="relative w-full h-full bg-[#ff0000] font-black text-base md:text-2xl py-3 md:py-6 px-4 md:px-10 rounded-full border-2 md:border-4 border-white shadow-xl md:shadow-2xl flex items-center justify-center transition-all duration-300"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: 0.5, background: 'transparent', zIndex: 20, color: '#fff' }}
            onClick={() => window.open('https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true', '_blank')}
          >
            98% Seats Booked
          </Button>
        </div>
      </div>
      {/* Custom keyframes for glow+scale */}
      <style>{`
        @keyframes flip-glow-once {
          0% { box-shadow: 0 0 0 0 #FFD60088, 0 0 0 0 #FFD60044; transform: scale(1); }
          50% { box-shadow: 0 0 32px 8px #FFD60088, 0 0 16px 4px #FFD60044; transform: scale(1.08); }
          100% { box-shadow: 0 0 0 0 #FFD60088, 0 0 0 0 #FFD60044; transform: scale(1); }
        }
        .animate-flip-glow-once {
          animation: flip-glow-once 1.8s 1;
        }
      `}</style>
    </div>
  );
}