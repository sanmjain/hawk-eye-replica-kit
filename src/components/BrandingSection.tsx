import { Star, User } from "lucide-react";
import rupeeLogo from '@/assets/date-time-icons.jpg';

// Dummy badge image for 600K+ followers (replace with actual if available)
const followersBadge = 'https://dummyimage.com/120x60/222/ffd600&text=600K%2B+FOLLOWERS';

export const BrandingSection = () => {
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Left: Logo, badge, brought to you by */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full md:w-auto">
            <div className="flex flex-col items-center md:items-start gap-2 md:gap-4">
              <h2 className="text-base md:text-lg font-medium text-white mb-2 md:mb-0 text-center md:text-left" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: 1 }}>
                Brought to you by
              </h2>
              <div className="flex flex-row items-center gap-8 md:gap-12">
                {/* Logo */}
                <div className="flex flex-col items-center gap-2">
                  <img src={rupeeLogo} alt="Finance by Wolfie" className="w-16 h-16 md:w-24 md:h-24 object-contain" />
                  <span className="text-[15px] md:text-lg font-semibold text-[#FFD600] mt-1" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: 1 }}>FINANCE BY<br/>WOLFIE</span>
                </div>
                {/* Divider */}
                <div className="hidden md:block w-px h-20 bg-white/30 mx-2"></div>
                {/* Followers badge */}
                <div className="flex flex-col items-center gap-1">
                  <img src={followersBadge} alt="600K+ Followers" className="w-28 md:w-36 object-contain" />
                  <span className="text-[#FFD600] text-xs md:text-sm font-bold mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>10M+ TAMIL PEOPLE<br/>FINANCIALLY EDUCATED</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Bigger Card */}
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <div className="bg-[#18181a] border border-white/30 rounded-xl px-6 py-6 md:px-12 md:py-8 flex flex-row items-center gap-10 md:gap-20 min-w-[340px] md:min-w-[480px] max-w-2xl mb-6 md:mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {/* Students Enrolled */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-[#FFD600] text-3xl md:text-4xl font-black flex items-center gap-2"><User size={28} color="#FFD700" />2,00,000+</span>
                <span className="text-white text-base md:text-lg font-medium">Students Enrolled</span>
              </div>
              {/* Ratings */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-[#FFD600] text-3xl md:text-4xl font-black flex items-center gap-2"><Star size={28} color="#FFD700" fill="#FFD700" />4.87/5</span>
                <span className="text-white text-base md:text-lg font-medium">Average Ratings</span>
              </div>
            </div>
            <div className="flex justify-center w-full mt-10 md:mt-12">
              <a
                href="https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#FFD600] hover:bg-[#FFC300] text-black font-bold text-xl md:text-2xl px-10 py-4 rounded-full shadow-lg transition-all text-center"
                style={{ fontFamily: 'Montserrat, sans-serif', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};