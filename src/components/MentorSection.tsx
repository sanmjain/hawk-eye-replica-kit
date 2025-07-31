import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import hariharanWolfie from "@/assets/hariharan-wolfie.jpg";

export const MentorSection = () => {
  return (
    <section className="relative bg-[#111112] py-16 md:py-24 overflow-hidden">
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
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center justify-center text-center md:text-left">
          {/* Mobile: Photo first, then text; Desktop: text left, photo right */}
          <div className="order-1 md:order-2 w-full flex justify-center md:justify-end mb-6 md:mb-0">
            <div className="border-2 border-white rounded-lg overflow-hidden max-w-xs md:max-w-sm">
              <img 
                src={hariharanWolfie} 
                alt="Hariharan aka Wolfie - Mentor" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="order-2 md:order-1 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left mx-auto" style={{maxWidth: '100%'}}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.5px' }}>
              Meet Your Mentor
            </h2>
            <p className="text-lg md:text-xl font-semibold mb-2" style={{ color: '#FFD600', fontFamily: 'Montserrat, sans-serif' }}>
              Hariharan aka Wolfie
            </p>
            <p className="text-white text-base md:text-lg mb-2 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              is the founder of <span className="font-bold text-[#FFD600]">Hawkeye Tamil Trading and Finance Community</span> and Tamil Nadu’s top <span className="font-bold text-[#FFD600]">Finance & Trading content creator</span>.
            </p>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mt-4" style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center', maxWidth: '100%' }}>
              My passion for accelerating people towards financial literacy and consequentially financial independence has lead to me and my team working on Hawkeye – an one of a kind tamil trading community with several comprehensive features designed to make you succeed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};