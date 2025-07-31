import { DollarSign, Briefcase, TrendingUp } from "lucide-react";

export const ProblemsSection = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "STUCK WITH ONE INCOME SOURCE?",
      description:
        "Economic uncertainties such as recession and lay offs can arise unexpectedly, leaving you in vulnerable situations.",
    },
    {
      icon: Briefcase,
      title: "YOUR 9-5 JOB IS NOT FINANCIALLY EMPOWERING?",
      description:
        "Your current job isn't providing the financial freedom and growth you desire",
    },
    {
      icon: TrendingUp,
      title: "LOOKING FOR A STRATEGIC SIDE INCOME?",
      description:
        "A powerful side income isn't just about extra money – it's about taking control of your financial stability and goals.",
    },
  ];

  return (
    <>
      <div className="bg-[#fdfaea] py-20 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Top left circle */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#fffbe6] rounded-full opacity-60 blur-2xl"></div>
          {/* Bottom right blob */}
          <svg className="absolute bottom-0 right-0 w-80 h-80 opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFD600" d="M44.8,-67.2C58.2,-59.2,68.7,-48.2,74.2,-34.9C79.7,-21.6,80.2,-6,75.7,7.7C71.2,21.4,61.7,33.2,51.1,44.2C40.5,55.2,28.8,65.4,15.2,70.2C1.6,75,-13.9,74.4,-28.2,69.2C-42.5,64,-55.6,54.2,-62.7,41.7C-69.8,29.2,-70.9,14.1,-70.2,-1.2C-69.5,-16.5,-67,-32.9,-58.2,-43.7C-49.4,-54.5,-34.3,-59.7,-19.2,-65.2C-4.1,-70.7,10.9,-76.5,24.7,-74.2C38.5,-71.9,51.2,-61.2,44.8,-67.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="text-3xl md:text-4xl font-medium text-gray-400 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Do you rely on
            </div>
            <div className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              just your monthly salary<br />to support yourself?
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
                <div
                  key={index}
                  className="relative text-left bg-[#18181a] p-8 md:p-10 rounded-xl md:rounded-2xl border border-black/10 shadow-lg flex flex-col gap-6 min-h-[320px] overflow-hidden"
                >
                  {/* Abstract circles in corners and random spots */}
                  {/* Top right corner */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl z-0"></div>
                  {/* Bottom left corner */}
                  <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#FFD600]/10 rounded-full blur-2xl z-0"></div>
                  {/* Random spot 1 */}
                  <div className="absolute top-1/2 left-2/3 w-10 h-10 bg-[#FFD600]/20 rounded-full blur-xl z-0"></div>
                  {/* Random spot 2 */}
                  <div className="absolute bottom-6 right-1/4 w-8 h-8 bg-white/10 rounded-full blur-lg z-0"></div>
                  {/* Extra random abstract shapes */}
                  <div className="absolute top-8 left-8 w-6 h-6 bg-[#FFD600]/30 rounded-full blur-md z-0"></div>
                  <div className="absolute bottom-12 right-8 w-12 h-12 bg-white/10 rounded-full blur-xl z-0"></div>
                  <div className="absolute top-1/3 right-1/3 w-7 h-7 bg-[#FFD600]/15 rounded-full blur-md z-0"></div>
                  <div className="flex items-center gap-2 mb-2 relative z-10">
                    <IconComponent className="w-8 h-8 text-[#FDCD0D]" />
                </div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-white leading-snug relative z-10" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {problem.title}
                </h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed relative z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
        </div>
      </div>
      {/* Call to Action Section (after cards) */}
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
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
          <div className="text-center mb-10">
            <div className="text-2xl md:text-3xl font-medium text-gray-400 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              If yes, then don't miss out on
            </div>
            <div className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              our webinar that can guide you<br />towards financial freedom
            </div>
          </div>
          <a
            href="https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-[#FFD600] hover:bg-[#FFC300] text-black font-bold text-2xl px-16 py-5 rounded-full shadow-lg transition-all"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Register Now
          </a>
    </div>
      </section>
    </>
  );
};