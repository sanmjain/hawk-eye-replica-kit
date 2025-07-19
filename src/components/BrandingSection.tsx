import { Button } from "@/components/ui/button";
import { Users, Star } from "lucide-react";

export const BrandingSection = () => {
  return (
    <div className="bg-hawkeye-gold py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <p className="text-hawkeye-black text-xl font-semibold">Brought to you by</p>
          
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-hawkeye-black font-display font-bold text-3xl">
              Finance by Wolfie
            </div>
            <div className="w-px h-20 bg-hawkeye-black/20"></div>
            <div className="text-hawkeye-black font-display font-bold text-3xl">
              300K+
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-2">
                <div className="w-16 h-16 bg-hawkeye-black/20 rounded-full flex items-center justify-center group-hover:bg-hawkeye-black/30 transition-colors">
                  <Users className="w-10 h-10 text-hawkeye-black" />
                </div>
              </div>
              <h3 className="text-4xl font-display font-bold text-hawkeye-black">2,00,000+</h3>
              <p className="text-hawkeye-black font-semibold text-lg">Students Enrolled</p>
            </div>
            
            <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-2">
                <div className="w-16 h-16 bg-hawkeye-black/20 rounded-full flex items-center justify-center group-hover:bg-hawkeye-black/30 transition-colors">
                  <Star className="w-10 h-10 text-hawkeye-black fill-current" />
                </div>
              </div>
              <h3 className="text-4xl font-display font-bold text-hawkeye-black">4.87/5</h3>
              <p className="text-hawkeye-black font-semibold text-lg">Average Ratings</p>
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