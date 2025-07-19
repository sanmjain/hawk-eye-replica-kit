import { DollarSign, Briefcase, TrendingUp } from "lucide-react";

export const ProblemsSection = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "Stuck with One Income Source?",
      description: "Economic uncertainties such as recession and lay offs can arise unexpectedly, leaving you in vulnerable situations."
    },
    {
      icon: Briefcase,
      title: "Your 9-5 job is not financially empowering?",
      description: "Your current job isn't providing the financial freedom and growth you desire"
    },
    {
      icon: TrendingUp,
      title: "Looking for a STRATEGIC side income?",
      description: "A powerful side income isn't just about extra money – it's about taking control of your financial stability and goals."
    }
  ];

  return (
    <div className="bg-hawkeye-black py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-12 mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-hawkeye-white leading-tight">
            Do you rely on <span className="text-hawkeye-gold">just your monthly salary</span> to support yourself?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div key={index} className="text-center space-y-6 bg-gradient-to-b from-hawkeye-dark to-hawkeye-gray p-10 rounded-2xl border border-hawkeye-gold/20 hover:border-hawkeye-gold hover:scale-105 transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-r from-hawkeye-gold to-hawkeye-gold-light rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-gold transition-shadow duration-300">
                  <IconComponent className="w-10 h-10 text-hawkeye-black" />
                </div>
                <h3 className="text-xl font-display font-bold text-hawkeye-white leading-tight">
                  {problem.title}
                </h3>
                <p className="text-hawkeye-gray leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 space-y-8">
          <h3 className="text-3xl lg:text-4xl font-display font-bold text-hawkeye-white leading-tight">
            If yes, then don't miss out on <span className="text-hawkeye-gold">our webinar that can guide you towards financial freedom</span>
          </h3>
        </div>
      </div>
    </div>
  );
};