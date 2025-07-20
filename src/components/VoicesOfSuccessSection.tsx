export const VoicesOfSuccessSection = () => {
  const testimonials = [
    {
      quote: "This webinar completely transformed my understanding of wealth creation. The strategies shared were practical and immediately applicable.",
      name: "Rajesh Kumar",
      role: "Software Engineer",
      location: "Chennai"
    },
    {
      quote: "Hariharan's approach to financial independence is unique and effective. I've already started implementing his methods.",
      name: "Priya Sharma", 
      role: "Marketing Manager",
      location: "Bangalore"
    },
    {
      quote: "The best investment I made was in this webinar. The knowledge gained is worth much more than the fee.",
      name: "Arun Vijay",
      role: "Business Owner",
      location: "Coimbatore"
    },
    {
      quote: "Clear, actionable advice from someone who has actually achieved financial success. Highly recommended!",
      name: "Meera Rajan",
      role: "Teacher",
      location: "Madurai"
    }
  ];

  return (
    <section className="bg-hawkeye-black py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black text-hawkeye-gold mb-4 md:mb-6">
            VOICES OF SUCCESS
          </h2>
          <p className="text-hawkeye-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            "Success leaves clues. When you find people who are getting the results you want, 
            find out what they're doing and model their behavior."
          </p>
          <div className="w-24 md:w-32 h-1 bg-hawkeye-gold mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="overflow-hidden relative">
          {/* Vignette effects */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-hawkeye-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-hawkeye-black to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-marquee space-x-6 md:space-x-8">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 bg-hawkeye-gold/10 border border-hawkeye-gold/30 rounded-2xl p-6 md:p-8 w-80 md:w-96"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-hawkeye-gold text-lg md:text-xl">★</span>
                  ))}
                </div>
                <p className="text-hawkeye-white text-sm md:text-base mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-hawkeye-gold/30 pt-4">
                  <p className="text-hawkeye-gold font-bold text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-hawkeye-gray text-xs md:text-sm">{testimonial.role}</p>
                  <p className="text-hawkeye-gray text-xs md:text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};