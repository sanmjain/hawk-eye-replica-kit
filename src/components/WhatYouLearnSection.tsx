import rupeeStack from "@/assets/date-time-icons.jpg";
import seminarPhotos from "@/assets/seminar-photos.jpg";
import hariharanWolfie from "@/assets/hariharan-wolfie.jpg";
import React, { useRef, useState, useEffect } from "react";

export const WhatYouLearnSection = () => {
  // Timeline data (unique images for each step)
  const timeline = [
    {
      image: rupeeStack,
      title: "Mastering your personal finance!",
      description:
        "We shall be analysing a few fundamental factors needed to master your personal finance across segments such as income, expenses, liquid and illiquid assets, tax savings strategies and so much more .",
    },
    {
      image: seminarPhotos,
      title: "Wolfie's 7 Step Strategy",
      description:
        "Time to deep dive into the stock market. The Science behind fundamentally analysing and discovering strategic stocks shall be revealed in this section .",
    },
    {
      image: hariharanWolfie,
      title: "Investing vs Trading",
      description:
        "We shall be looking at the differences between investing and trading along with the obvious benefits of being involved in the stock market in today's time and age .",
    },
    {
      image: rupeeStack,
      title: "Financial institutions and instruments",
      description:
        "We shall be covering the various financial institutions that govern the financial instruments in India. We shall be looking at indices as well .",
    },
    {
      image: seminarPhotos,
      title: "Technical analysis and its secrets",
      description:
        "Trading and technical analysis are synonymous. We shall be seeing the art of technically analysing trading charts along with a few pivotal topics .",
    },
    {
      image: hariharanWolfie,
      title: "How do Institutions trap Retailers?",
      description:
        "We shall be seeing how huge Institutions trap retailers. An in depth analysis of our systems shall be given as well. Be ready to have your minds blown! .",
    },
    {
      image: rupeeStack,
      title: "Wolfie's path to financial optimization",
      description:
        "Ultimate secret reveal. Time to open your eyes from a financial perspective .",
    },
    {
      image: seminarPhotos,
      title: "Insights into Hawkeye",
      description:
        "The moment you've all been waiting for. Discover who we are as a community and what makes us the number 1 in the state .",
    },
  ];

  const desktopCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let found = 0;
      let progressVal = 0;
      const isMobile = window.innerWidth < 768;
      const refs = isMobile ? mobileCardRefs.current : desktopCardRefs.current;
      for (let i = 0; i < refs.length; i++) {
        const ref = refs[i];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            found = i;
            progressVal = (i + 1) / refs.length;
          }
        }
      }
      setActiveIdx(found);
      setProgress(progressVal);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#111112] py-20 overflow-hidden">
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">What will you learn?</h2>
        </div>
        {/* Timeline layout - desktop: one vertical line, image and card per row */}
        <div className="hidden md:grid grid-cols-[340px_40px_1fr] gap-0 md:gap-12 max-w-5xl mx-auto relative">
          {/* Center: Vertical progress line (absolute, spans all rows) */}
          <div className="absolute left-[340px] top-0 h-full flex flex-col items-center z-0" style={{ width: 40 }}>
            <div className="w-1 h-full bg-[#FFD600]/30 rounded-full relative">
              <div
                className="absolute left-0 top-0 w-1 bg-[#FFD600] rounded-full transition-all duration-300"
                style={{ height: `${progress * 100}%` }}
              ></div>
            </div>
          </div>
          {/* Timeline rows */}
          {timeline.map((item, idx) => (
            <React.Fragment key={idx}>
              {/* Left: Image */}
              <div className="flex flex-col items-center justify-center" style={{ minHeight: 220 }}>
                <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] bg-black/40 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-white/10 shadow-lg">
                  <img src={item.image} alt={item.title} className="w-[180px] h-[180px] object-contain" />
                </div>
              </div>
              {/* Center: (empty, line is absolute) */}
              <div></div>
              {/* Right: Timeline card */}
              <div className="flex flex-col items-start justify-center" style={{ minHeight: 220 }}>
                <div
                  ref={el => (desktopCardRefs.current[idx] = el)}
                  className={`bg-[#18181a] border border-white/20 rounded-xl p-8 shadow-lg min-w-[340px] max-w-[480px] ${activeIdx === idx ? 'ring-2 ring-[#FFD600]' : ''}`}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.description}</p>
                </div>
              </div>
            </React.Fragment>
            ))}
        </div>
        {/* Mobile layout: stack image and text in one div, one after another, with left timeline line */}
        <div className="md:hidden flex flex-col gap-12 max-w-xl mx-auto relative">
          {/* Vertical timeline line on the left with progress */}
          <div className="absolute left-6 top-0 h-full w-1 bg-[#FFD600]/30 rounded-full z-0">
            <div
              className="absolute left-0 top-0 w-1 bg-[#FFD600] rounded-full transition-all duration-300"
              style={{ height: `${progress * 100}%` }}
            ></div>
          </div>
          {timeline.map((item, idx) => (
            <div
              key={idx}
              ref={el => (mobileCardRefs.current[idx] = el)}
              className="flex flex-row items-start gap-4 relative z-10"
            >
              {/* Timeline dot for each step */}
              <div className="flex flex-col items-center mr-2 pt-4">
                <div className="w-4 h-4 bg-[#FFD600] rounded-full mb-2"></div>
                {idx < timeline.length - 1 && <div className="w-1 flex-1 bg-[#FFD600]/30" style={{ minHeight: 60 }}></div>}
              </div>
              <div className="flex-1 flex flex-col items-center gap-6">
                <div className="w-[180px] h-[180px] bg-black/40 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-white/10 shadow-lg">
                  <img src={item.image} alt={item.title} className="w-[140px] h-[140px] object-contain" />
                  </div>
                <div className="bg-[#18181a] border border-white/20 rounded-xl p-6 shadow-lg w-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.description}</p>
                </div>
              </div>
              </div>
            ))}
          </div>
        <div className="text-center mt-12">
          <a
            href="https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFD600] hover:bg-[#FFC300] text-black font-bold text-2xl px-16 py-5 rounded-full shadow-lg transition-all"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};