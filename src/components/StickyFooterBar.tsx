import React, { useEffect, useRef, useState } from "react";

const FOOTER_ID = "main-footer"; // अगर आपके footer में कोई id/class है तो उसे यहाँ डालें

export const StickyFooterBar = () => {
  const [show, setShow] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  // Show bar on scroll (except at top)
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 100 && currentY < document.body.scrollHeight - window.innerHeight - 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Footer intersection detection
  useEffect(() => {
    const footer = document.getElementById(FOOTER_ID);
    if (!footer) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!show || footerVisible) return null;

  return (
    <div
      ref={barRef}
      className="fixed bottom-0 left-0 w-full z-50 border-t border-hawkeye-gold-dark flex flex-col md:flex-row items-center justify-between px-2 md:px-8 py-2 md:py-3 shadow-[0_-6px_32px_0_rgba(255,214,0,0.18)] transition-transform duration-300 animate-fade-in"
      style={{ 
        fontFamily: 'Montserrat, sans-serif', 
        boxShadow: '0 -6px 32px 0 rgba(255,214,0,0.18), 0 -1px 0 0 #ffd600',
        background: `linear-gradient(90deg, #ffe066 0%, #ffd600 60%, #fffbe6 100%)`,
        backgroundImage: window.innerWidth < 768 
          ? 'linear-gradient(90deg, #e6b800 0%, #ffe066 60%, #fffbe6 100%)' 
          : 'linear-gradient(90deg, #ffe066 0%, #ffd600 60%, #fffbe6 100%)'
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6 w-full md:w-auto">
        <div className="flex items-center gap-1 md:gap-2">
          <span className="text-2xl md:text-3xl font-black text-hawkeye-black animate-glow-pulse px-2 rounded" style={{ textShadow: '0 0 12px #ffe066, 0 0 24px #ffd600' }}>₹ 199</span>
          <span className="text-base md:text-2xl text-hawkeye-black/60 line-through">₹ 499</span>
        </div>
        <div className="text-hawkeye-black font-semibold text-xs md:text-lg hidden md:block">
          Sunday, 3rd August 2025, 11am - 2pm
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:items-center gap-1 md:gap-0">
        <div className="text-hawkeye-black font-semibold text-xs md:text-lg md:hidden mb-1">
          Sunday, 3rd August 2025, 11am - 2pm
        </div>
        <a
          href="https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 md:mt-0 md:ml-8 px-6 md:px-8 py-2 md:py-3 border-2 border-hawkeye-black rounded-lg bg-white text-hawkeye-black font-bold text-base md:text-lg shadow-lg hover:bg-hawkeye-gold-dark hover:text-white hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-hawkeye-gold-dark"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}; 