import seminarPhotos from "@/assets/seminar-photos.jpg";
import React, { useEffect, useRef, useState } from "react";

export const VoicesOfSuccessSection = () => {
  // Carousel images (placeholder, आप चाहें तो बदल सकते हैं)
  const images = [seminarPhotos, seminarPhotos, seminarPhotos];
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<any>(null);

  // Auto-scroll every 3s
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, images.length]);

  const goPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section className="relative bg-[#111112] py-12 md:py-20 overflow-hidden">
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
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-serif leading-snug">
            <span className="text-white font-bold">Voices of Success with </span>
            <span className="text-[#C1973F] italic">Hawkeye’s </span>
            <span className="text-[#C1973F] italic">Trading and Finance Community</span>
          </h2>
        </div>

        {/* Main Content: Carousel + Text */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Left: Carousel */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/60" style={{ minWidth: 340, maxWidth: 500 }}>
            <img
              src={images[current]}
              alt={`Success ${current + 1}`}
              className="w-full h-[320px] md:h-[380px] object-cover rounded-3xl"
            />
            {/* Arrows */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#FDCD0D] transition"
              onClick={goPrev}
              aria-label="Previous"
              style={{ fontSize: 24 }}
            >
              &#8592;
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#FDCD0D] transition"
              onClick={goNext}
              aria-label="Next"
              style={{ fontSize: 24 }}
            >
              &#8594;
            </button>
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === current ? 'bg-[#FDCD0D]' : 'bg-white/40'} border border-white`}
                ></span>
                  ))}
                </div>
          </div>

          {/* Right: Text + CTA */}
          <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
            <p className="text-white text-lg md:text-xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              At Hawkeye's Trading Community, success is not just a goal; it's a shared journey celebrated by our diverse and thriving community of professionals.
            </p>
            <p className="text-white text-lg md:text-xl mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Your success story could be the next one we celebrate!
            </p>
            <a
              href="https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#FDCD0D] to-[#BFA100] text-black font-bold text-xl px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};