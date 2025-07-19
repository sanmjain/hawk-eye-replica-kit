import { Button } from "@/components/ui/button";
import { 
  PiggyBank, 
  TrendingUp, 
  BarChart3, 
  Building2, 
  Target, 
  Shield, 
  Lightbulb, 
  Eye 
} from "lucide-react";

export const CurriculumSection = () => {
  const curriculum = [
    {
      time: "00 min to 30 mins",
      title: "Mastering your personal finance!",
      description: "We shall be analysing a few fundamental factors needed to master your personal finance across segments such as income, expenses, liquid and illiquid assets, tax savings strategies and so much more.",
      icon: PiggyBank,
      bgColor: "bg-blue-500"
    },
    {
      time: "30 mins to 01:00 hrs",
      title: "Wolfie's 7 Step Strategy",
      description: "Time to deep dive into the stock market. The Science behind fundamentally analysing and discovering strategic stocks shall be revealed in this section",
      icon: TrendingUp,
      bgColor: "bg-green-500"
    },
    {
      time: "01:00 hrs to 01:10 hrs",
      title: "Investing vs Trading",
      description: "We shall be looking at the differences between investing and trading along with the obvious benefits of being involved in the stock market in today's time and age",
      icon: BarChart3,
      bgColor: "bg-purple-500"
    },
    {
      time: "01:10 hrs to 01:20 hrs",
      title: "Financial institutions and instruments",
      description: "We shall be covering the various financial institutions that govern the financial instruments in India. We shall be looking at indices as well.",
      icon: Building2,
      bgColor: "bg-orange-500"
    },
    {
      time: "01:20 hrs to 01:50 hrs",
      title: "Technical analysis and its secrets",
      description: "Trading and technical analysis are synonymous. We shall be seeing the art of technically analysing trading charts along with a few pivotal topics",
      icon: Target,
      bgColor: "bg-red-500"
    },
    {
      time: "01:50 hrs to 02:10 hrs",
      title: "How do Institutions trap Retailers?",
      description: "We shall be seeing how huge Institutions trap retailers. An in depth analysis of our systems shall be given as well. Be ready to have your minds blown!",
      icon: Shield,
      bgColor: "bg-yellow-500"
    },
    {
      time: "02:10 hrs to 02:30 hrs",
      title: "Wolfie's path to financial optimization",
      description: "Ultimate secret reveal. Time to open your eyes from a financial perspective.",
      icon: Lightbulb,
      bgColor: "bg-cyan-500"
    },
    {
      time: "02:30 hrs to 03:00 hrs",
      title: "Insights into Hawkeye",
      description: "The moment you've all been waiting for. Discover who we are as a community and what makes us the number 1 in the state",
      icon: Eye,
      bgColor: "bg-indigo-500"
    }
  ];

  return (
    <div className="bg-hawkeye-black py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-hawkeye-gold">
            What will you learn?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {curriculum.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-hawkeye-dark border border-hawkeye-gold/20 rounded-lg p-6 hover:border-hawkeye-gold transition-smooth">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-hawkeye-gold text-sm font-semibold">
                      {item.time}
                    </p>
                    <h3 className="text-hawkeye-white font-bold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-hawkeye-gray text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="hero"
            onClick={() => window.open("https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true", "_blank")}
          >
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};