import { Briefcase, Building, GraduationCap } from "lucide-react";

export const WebinarForSection = () => {
  const audiences = [
    {
      icon: Briefcase,
      title: "SALARIED PROFESSIONALS",
      description:
        "Get access to premium stock market knowledge so that you can take control of your finances.",
    },
    {
      icon: Building,
      title: "BUSINESS OWNERS",
      description:
        "As a business owner it's crucial to diversify and multiply your cash flows.",
    },
    {
      icon: GraduationCap,
      title: "ABSOLUTE BEGINNERS",
      description:
        "The webinar is beginner friendly and frankly speaking, anyone can join. Come join in and take your first step towards financial freedom.",
    },
  ];

  return (
    <div className="bg-[#fdfaea] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
            Who is this webinar for?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div
                key={index}
                className="relative text-left bg-[#18181a] p-8 md:p-10 rounded-xl md:rounded-2xl border border-black/10 shadow-lg flex flex-col gap-6 min-h-[260px] overflow-hidden"
              >
                {/* Abstract circles in corners and random spots */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl z-0"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#FFD600]/10 rounded-full blur-2xl z-0"></div>
                <div className="absolute top-1/2 left-2/3 w-10 h-10 bg-[#FFD600]/20 rounded-full blur-xl z-0"></div>
                <div className="absolute bottom-6 right-1/4 w-8 h-8 bg-white/10 rounded-full blur-lg z-0"></div>
                <div className="absolute top-8 left-8 w-6 h-6 bg-[#FFD600]/30 rounded-full blur-md z-0"></div>
                <div className="absolute bottom-12 right-8 w-12 h-12 bg-white/10 rounded-full blur-xl z-0"></div>
                <div className="absolute top-1/3 right-1/3 w-7 h-7 bg-[#FFD600]/15 rounded-full blur-md z-0"></div>
                <div className="flex items-center gap-2 mb-2 relative z-10">
                  <IconComponent className="w-8 h-8 text-[#FDCD0D]" />
                </div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-white leading-snug relative z-10" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {audience.title}
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed relative z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block bg-[#FFD600] hover:bg-[#FFC300] text-black font-bold text-2xl md:text-2xl px-8 py-3 md:px-0 md:py-5 rounded-full shadow-lg transition-all text-center mx-auto w-full md:max-w-3xl"
            style={{ fontFamily: 'Montserrat, sans-serif', minWidth: '0', maxWidth: '900px' }}
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};