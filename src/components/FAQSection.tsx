import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How will I get the link to join the webinar?",
      answer: "You will receive the zoom link via whatsapp. Once you sign up for the webinar you will be added into our WhatsApp community where you will receive the zoom link. Reminders will be sent before the webinar as well."
    },
    {
      question: "I have zero knowledge about trading. Can I join?",
      answer: "Yes absolutely. The webinar is beginner friendly and we shall start from the absolute basics. You'll learn a lot, whether you're a working professional, a college student, an entrepreneur or a housewife."
    },
    {
      question: "In which language will the webinar be conducted?",
      answer: "The webinar will be conducted in Tamil language."
    },
    {
      question: "Can I ask my questions during the live sessions?",
      answer: "Yes, indeed. There shall be a dedicated half an hour session at the end where you can ask your questions and solve your doubts. Access to the bonuses will be given within 48 hours of the webinar via WhatsApp as well as your email ID."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-hawkeye-black py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-hawkeye-gold">
            FAQ
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-hawkeye-dark border border-hawkeye-gold/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-hawkeye-gray/20 transition-smooth"
              >
                <h3 className="font-bold text-hawkeye-white text-lg">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-hawkeye-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-hawkeye-gold flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-hawkeye-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};