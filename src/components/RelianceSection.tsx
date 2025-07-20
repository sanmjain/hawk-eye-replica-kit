export const RelianceSection = () => {
  const reliancePoints = [
    {
      icon: "📱",
      title: "Social Media Tips",
      description: "Random advice from influencers without proven track records"
    },
    {
      icon: "📺",
      title: "TV Shows",
      description: "Generic financial advice that doesn't apply to your specific situation"
    },
    {
      icon: "📰",
      title: "News Articles",
      description: "Outdated strategies that worked in different market conditions"
    },
    {
      icon: "🤝",
      title: "Friends & Family",
      description: "Well-meaning but often misguided financial suggestions"
    }
  ];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black text-hawkeye-black mb-4 md:mb-6">
            DO YOU RELY ON JUST THIS?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Most people make financial decisions based on incomplete information. 
            It's time to learn from someone who has actually built wealth systematically.
          </p>
          <div className="w-24 md:w-32 h-1 bg-hawkeye-gold mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Reliance Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {reliancePoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-100 rounded-2xl p-6 md:p-8 h-full border border-gray-200 hover:border-hawkeye-gold/30 transition-colors">
                <div className="text-4xl md:text-5xl mb-4">{point.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-hawkeye-black mb-3">{point.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-hawkeye-gold/10 rounded-2xl p-8 md:p-12 border border-hawkeye-gold/30">
          <h3 className="text-2xl md:text-3xl font-display font-black text-hawkeye-black mb-4">
            STOP GUESSING, START LEARNING
          </h3>
          <p className="text-gray-700 text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Join thousands who have transformed their financial future with proven, systematic strategies 
            from someone who has actually walked the path to financial independence.
          </p>
          <div className="inline-flex items-center gap-2 text-hawkeye-gold font-bold text-lg">
            <span>Learn the EXACT system that works</span>
            <span className="text-2xl">→</span>
          </div>
        </div>
      </div>
    </section>
  );
};