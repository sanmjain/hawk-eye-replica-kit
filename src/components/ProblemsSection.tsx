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
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-hawkeye-white">
            Do you rely on <span className="text-hawkeye-gold">just your monthly salary</span> to support yourself?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div key={index} className="text-center space-y-4 bg-hawkeye-dark p-8 rounded-lg border border-hawkeye-gold/20">
                <div className="w-16 h-16 bg-hawkeye-gold rounded-full flex items-center justify-center mx-auto">
                  <IconComponent className="w-8 h-8 text-hawkeye-black" />
                </div>
                <h3 className="text-xl font-bold text-hawkeye-white">
                  {problem.title}
                </h3>
                <p className="text-hawkeye-gray">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 space-y-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-hawkeye-white">
            If yes, then don't miss out on <span className="text-hawkeye-gold">our webinar that can guide you towards financial freedom</span>
          </h3>
        </div>
      </div>
    </div>
  );
};