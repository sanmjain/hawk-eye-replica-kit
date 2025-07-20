import dateTimeIcons from "@/assets/date-time-icons.jpg";

export const WhatYouLearnSection = () => {
  const timelineItems = [
    {
      time: "0-30 mins",
      title: "Foundation of Wealth Creation",
      description: "Understanding the fundamental principles that separate the wealthy from the average. Learn the mindset shift that's crucial for long-term success."
    },
    {
      time: "30-60 mins", 
      title: "Investment Strategies That Work",
      description: "Discover proven investment approaches that have generated consistent returns. Real strategies, not theoretical concepts."
    },
    {
      time: "60-90 mins",
      title: "Risk Management & Portfolio Building", 
      description: "Learn how to protect your wealth while growing it. Understand diversification, asset allocation, and managing market volatility."
    },
    {
      time: "90-120 mins",
      title: "Income Multiplication Techniques",
      description: "Explore multiple income streams and passive income generation. Turn your money into a wealth-building machine."
    },
    {
      time: "120-150 mins",
      title: "Tax Optimization Strategies",
      description: "Legal ways to minimize tax burden and maximize your take-home wealth. Keep more of what you earn."
    },
    {
      time: "150-180 mins",
      title: "Action Plan & Next Steps",
      description: "Get a personalized roadmap for your wealth creation journey. Leave with concrete steps to implement immediately."
    }
  ];

  return (
    <section className="bg-hawkeye-black py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black text-hawkeye-gold mb-4 md:mb-6">
            WHAT YOU WILL LEARN
          </h2>
          <p className="text-hawkeye-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            3 hours of intensive, practical training that will transform how you think about money and wealth creation
          </p>
          <div className="w-24 md:w-32 h-1 bg-hawkeye-gold mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Desktop Layout: Image left, Timeline right */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Image */}
          <div className="sticky top-8">
            <img 
              src={dateTimeIcons} 
              alt="What you will learn timeline"
              className="w-full h-auto rounded-2xl border border-hawkeye-gold/30 shadow-2xl"
            />
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-hawkeye-gold/30">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-hawkeye-gold rounded-full border-4 border-hawkeye-black"></div>
                <div className="bg-hawkeye-gold/10 border border-hawkeye-gold/30 rounded-xl p-6">
                  <div className="text-hawkeye-gold font-bold text-sm mb-2">{item.time}</div>
                  <h3 className="text-hawkeye-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-hawkeye-gray text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout: Image top, Timeline as caption */}
        <div className="lg:hidden">
          {/* Image */}
          <div className="mb-8">
            <img 
              src={dateTimeIcons} 
              alt="What you will learn timeline"
              className="w-full h-auto rounded-2xl border border-hawkeye-gold/30 shadow-2xl"
            />
          </div>

          {/* Timeline as caption */}
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <div key={index} className="bg-hawkeye-gold/10 border border-hawkeye-gold/30 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-hawkeye-gold rounded-full flex items-center justify-center">
                    <span className="text-hawkeye-black font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="text-hawkeye-gold font-bold text-sm">{item.time}</div>
                </div>
                <h3 className="text-hawkeye-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-hawkeye-gray text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};