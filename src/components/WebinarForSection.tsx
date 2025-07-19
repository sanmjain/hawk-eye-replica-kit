import { Button } from "@/components/ui/button";
import { Briefcase, Building, GraduationCap } from "lucide-react";

export const WebinarForSection = () => {
  const audiences = [
    {
      icon: Briefcase,
      title: "Salaried professionals",
      description: "Get access to premium stock market knowledge so that you can take control of your finances."
    },
    {
      icon: Building,
      title: "BUSINESS OWNERS",
      description: "As a business owner it's crucial to diversify and multiply your cash flows."
    },
    {
      icon: GraduationCap,
      title: "Absolute Beginners",
      description: "The webinar is beginner friendly and frankly speaking, anyone can join. Come join in and take your first step towards financial freedom."
    }
  ];

  return (
    <div className="bg-hawkeye-dark py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-hawkeye-gold">
            Who is this webinar for?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div key={index} className="text-center space-y-4 bg-hawkeye-black p-8 rounded-lg border border-hawkeye-gold">
                <div className="w-16 h-16 bg-hawkeye-gold rounded-full flex items-center justify-center mx-auto">
                  <IconComponent className="w-8 h-8 text-hawkeye-black" />
                </div>
                <h3 className="text-xl font-bold text-hawkeye-white">
                  {audience.title}
                </h3>
                <p className="text-hawkeye-gray">
                  {audience.description}
                </p>
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