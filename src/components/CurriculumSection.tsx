import { Button } from "@/components/ui/button";

export const CurriculumSection = () => {
  const curriculum = [
    {
      time: "00 min to 30 mins",
      title: "Mastering your personal finance!",
      description: "We shall be analysing a few fundamental factors needed to master your personal finance across segments such as income, expenses, liquid and illiquid assets, tax savings strategies and so much more.",
      color: "from-blue-500 to-blue-600"
    },
    {
      time: "30 mins to 01:00 hrs",
      title: "Wolfie's 7 Step Strategy",
      description: "Time to deep dive into the stock market. The Science behind fundamentally analysing and discovering strategic stocks shall be revealed in this section",
      color: "from-green-500 to-green-600"
    },
    {
      time: "01:00 hrs to 01:10 hrs",
      title: "Investing vs Trading",
      description: "We shall be looking at the differences between investing and trading along with the obvious benefits of being involved in the stock market in today's time and age",
      color: "from-purple-500 to-purple-600"
    },
    {
      time: "01:10 hrs to 01:20 hrs",
      title: "Financial institutions and instruments",
      description: "We shall be covering the various financial institutions that govern the financial instruments in India. We shall be looking at indices as well.",
      color: "from-orange-500 to-orange-600"
    },
    {
      time: "01:20 hrs to 01:50 hrs",
      title: "Technical analysis and its secrets",
      description: "Trading and technical analysis are synonymous. We shall be seeing the art of technically analysing trading charts along with a few pivotal topics",
      color: "from-red-500 to-red-600"
    },
    {
      time: "01:50 hrs to 02:10 hrs",
      title: "How do Institutions trap Retailers?",
      description: "We shall be seeing how huge Institutions trap retailers. An in depth analysis of our systems shall be given as well. Be ready to have your minds blown!",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      time: "02:10 hrs to 02:30 hrs",
      title: "Wolfie's path to financial optimization",
      description: "Ultimate secret reveal. Time to open your eyes from a financial perspective.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      time: "02:30 hrs to 03:00 hrs",
      title: "Insights into Hawkeye",
      description: "The moment you've all been waiting for. Discover who we are as a community and what makes us the number 1 in the state",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="bg-hawkeye-black py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-hawkeye-gold">
            What will you learn?
          </h2>
        </div>

        {/* Large grid layout matching original */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-7xl mx-auto">
          {curriculum.map((item, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300">
              {/* Card container with exact original styling */}
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[280px]">
                {/* Colored header section */}
                <div className={`bg-gradient-to-r ${item.color} h-20 flex items-center justify-center`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    {/* Icon placeholder matching original */}
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-600 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {item.time}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="hero"
            size="xl"
            className="text-xl py-6 px-12 shadow-2xl hover:shadow-gold"
            onClick={() => window.open("https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true", "_blank")}
          >
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};