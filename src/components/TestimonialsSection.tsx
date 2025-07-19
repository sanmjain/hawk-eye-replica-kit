import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Kabilnath S J",
      role: "Mechanical Engineer",
      company: "TCS",
      feedback: "I managed to understand the whole webinar class. Oru beginner ku puriyura maari irunthathu. Explanation was very good. Trading pathi neraya eye openers was there. Thank you Wolfie bro 👊",
      avatar: "KS"
    },
    {
      name: "Thirumaran",
      role: "Senior Business Analyst", 
      company: "TCS",
      feedback: "It was a wonderful session and was useful for me. I was able to learn about power of trading and investments. Tamil la romba nalla crisp a explain pannenga beginners ku puriyura maari.",
      avatar: "TH"
    },
    {
      name: "ARUNKUMAR",
      role: "Software Engineer",
      company: "TCS", 
      feedback: "Hats off Wolfie bro ! Romba nalla puriya vechenga finance pathi trading pathi lam. Antha institutions trapping retailers was my favourite part. Unmeliye mind blowing . Excited to be a part of Hawkeye",
      avatar: "AR"
    },
    {
      name: "Aarthyca Elakiyen",
      role: "Doctor",
      company: "",
      feedback: "Was very good and made us understand personal finance and inflation and everything. Trading use Pannu Epdi side la good money earn panlamnu got to know. Thank you.",
      avatar: "AE"
    },
    {
      name: "JOSEPH PRINCE",
      role: "Geologist",
      company: "",
      feedback: "Solid webinar ! Absolutely loved the entire 3 hours. Beginner friendly a irunthathu Naala ellarukum benefit. Interactive sessions was amazing. Was able to clear doubts.",
      avatar: "JP"
    },
    {
      name: "Harish Babu KS",
      role: "Aircraft Mechanic EASA",
      company: "",
      feedback: "Institutions trapping retailers and Hawkeye oda winning systems was superb. Pakka va irunthuchu explanation. Joined Hawkeye and excited for journey",
      avatar: "HB"
    }
  ];

  return (
    <div className="bg-hawkeye-black py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-hawkeye-white">
            Testimonials
          </h2>
          <p className="text-hawkeye-gold text-xl">
            Here's what our attendees say about us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-hawkeye-dark border border-hawkeye-gold/20 rounded-lg p-6 space-y-4 hover:border-hawkeye-gold transition-smooth">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-hawkeye-gold rounded-full flex items-center justify-center">
                  <span className="font-bold text-hawkeye-black text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-hawkeye-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-hawkeye-gray text-sm">
                    {testimonial.role}
                  </p>
                  {testimonial.company && (
                    <p className="text-hawkeye-gold text-xs font-semibold">
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-hawkeye-gold fill-current" />
                ))}
              </div>

              <p className="text-hawkeye-gray text-sm leading-relaxed">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};