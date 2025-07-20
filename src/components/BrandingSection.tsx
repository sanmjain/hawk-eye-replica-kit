import hariharanWolfie from "@/assets/hariharan-wolfie.jpg";

export const BrandingSection = () => {
  return (
    <section className="bg-hawkeye-black py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black text-hawkeye-gold mb-4">
            BROUGHT TO YOU BY
          </h2>
          <div className="w-24 md:w-32 h-1 bg-hawkeye-gold mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Company Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-hawkeye-gold/10 border border-hawkeye-gold/30 rounded-2xl p-6 md:p-8">
              <div className="text-4xl md:text-6xl font-display font-black text-hawkeye-gold mb-4">
                HAWKEYE
              </div>
              <p className="text-hawkeye-white text-lg md:text-xl font-bold mb-4">
                Tamil Nadu's #1 Finance & Trading Community
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6 text-center">
                <div className="bg-hawkeye-gold/20 rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-black text-hawkeye-gold">600K+</div>
                  <div className="text-hawkeye-gray text-sm">Community Members</div>
                </div>
                <div className="bg-hawkeye-gold/20 rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-black text-hawkeye-gold">2L+</div>
                  <div className="text-hawkeye-gray text-sm">Students Enrolled</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Founder Photo */}
          <div className="text-center">
            <div className="relative inline-block">
              <img 
                src={hariharanWolfie} 
                alt="Hariharan - Founder of HawkEye"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-hawkeye-gold shadow-2xl mx-auto"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-hawkeye-gold text-hawkeye-black px-4 py-2 md:px-6 md:py-3 rounded-xl font-black text-sm md:text-base border-2 border-hawkeye-gold-dark">
                Hariharan K - Founder & CEO
              </div>
            </div>
            <p className="text-hawkeye-gray text-sm md:text-base mt-8 max-w-md mx-auto leading-relaxed">
              Empowering individuals with practical financial education and proven wealth-building strategies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};