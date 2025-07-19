import { Button } from "@/components/ui/button";
import { Users, Star } from "lucide-react";

export const BrandingSection = () => {
  return (
    <div className="bg-hawkeye-gold py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <p className="text-hawkeye-black text-lg">Brought to you by</p>
          
          <div className="flex items-center justify-center gap-8">
            <div className="text-hawkeye-black font-bold text-2xl">
              Finance by Wolfie
            </div>
            <div className="w-px h-16 bg-hawkeye-black/20"></div>
            <div className="text-hawkeye-black font-bold text-2xl">
              300K+
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-8 h-8 text-hawkeye-black" />
              </div>
              <h3 className="text-3xl font-bold text-hawkeye-black">2,00,000+</h3>
              <p className="text-hawkeye-black">Students Enrolled</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-8 h-8 text-hawkeye-black fill-current" />
              </div>
              <h3 className="text-3xl font-bold text-hawkeye-black">4.87/5</h3>
              <p className="text-hawkeye-black">Average Ratings</p>
            </div>
          </div>

          <Button 
            variant="goldOutline" 
            className="bg-hawkeye-black text-hawkeye-gold border-hawkeye-black hover:bg-hawkeye-gold hover:text-hawkeye-black"
            onClick={() => window.open("https://hawkeyeacademy.exlyapp.com/checkout/7dadfc1a-479a-4749-b149-1aa9378faab3?compact=true&init_booking=true", "_blank")}
          >
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};