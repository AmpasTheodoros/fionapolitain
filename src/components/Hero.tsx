import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen py-20 md:py-0 flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 z-0 text-[20rem] font-bold text-fiona-pink/20 flex items-end justify-center overflow-hidden"
        style={{ fontFamily: "serif" }}
      >
        ENGLISH
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-playfair leading-tight">
              Vous cherchez un professeur <span className="text-fiona-pink">d'anglais</span> idéal?
            </h1>
            
            <p className="text-xl text-gray-700">
              Progresser rapidement en anglais grâce à mes cours personnalisés
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="bg-fiona-pink hover:bg-fiona-pink/80 text-white rounded-md">
                <Link to="https://calendly.com/fiona-khadraoui/30min">Réserver un cours</Link>
              </Button>
              {/* <Button asChild variant="outline" className="border-fiona-pink text-fiona-pink hover:bg-fiona-pink/10 rounded-md">
                <Link to="/contact">Me contacter</Link>
              </Button> */}
            </div>

            <div className="pt-8">
              <div className="border-l-4 border-gray-300 pl-4 italic">
                <p className="text-gray-700">Un investissement dans le savoir paie toujours les meilleurs intérêts</p>
                <p className="text-gray-700">An investment in knowledge pays the best interest</p>
                <p className="text-gray-800 font-medium mt-2">Benjamin Franklin</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Circular Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#f5e8dd] overflow-hidden flex items-center justify-center">
                <img 
                  src="/lovable-uploads/image.webp" 
                  alt="Fiona Politain" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;