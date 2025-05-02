
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-[100vh] flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      <div 
        className="absolute inset-0 opacity-10 z-0 text-[20rem] font-bold text-fiona-pink/20 flex items-end justify-center overflow-hidden"
        style={{ fontFamily: "serif" }}
      >
        ENGLISH
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 space-y-8 mt-8 md:mt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-playfair leading-tight">
              Vous cherchez un professeur <span className="text-fiona-pink">d'anglais</span> idéal?
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700">
              Progresser rapidement en anglais grâce à mes cours personnalisés
            </p>
            
            {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="bg-fiona-pink hover:bg-fiona-pink/80 text-white rounded-md">
                <Link to="https://calendly.com/fiona-khadraoui/30min">Réserver un cours</Link>
              </Button>
            </div>

            <div className="pt-10">
              <div className="border-l-4 border-gray-300 pl-6 italic">
              <p className="text-gray-700 text-lg">Un investissement dans le savoir paie toujours les meilleurs intérêts</p>
                <p className="text-gray-700 text-lg">An investment in knowledge pays the best interest</p>
                <p className="text-gray-800 font-medium mt-2">Benjamin Franklin</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Circular Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[650px] xl:h-[650px] rounded-full bg-[#f5e8dd] overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/image.webp" 
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
