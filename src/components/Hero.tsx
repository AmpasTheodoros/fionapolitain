
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <div className="py-16 md:py-24 bg-[#f5f2ed]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto border border-gray-200 rounded-lg p-6 md:p-10 bg-white/80">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-playfair">
              Fiona Politain
            </h1>
            <p className="text-lg text-gray-700">
              Professeur d'anglais passionnée et streameuse, j'offre des cours particuliers adaptés à tous les niveaux. Découvrez une méthode d'apprentissage moderne et efficace.
            </p>
            
            {/* Social media links */}
            <div className="flex items-center space-x-2 text-gray-600 pt-4">
              <span className="font-medium">@fionapolitain</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-fiona-pink transition-colors">
                <Instagram size={22} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-fiona-pink transition-colors">
                <Facebook size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-fiona-pink transition-colors">
                <Twitter size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-fiona-pink transition-colors">
                <Linkedin size={22} />
              </a>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="bg-fiona-pink hover:bg-fiona-pink/80 text-white rounded-md">
                <Link to="/cours">Découvrir mes cours</Link>
              </Button>
              <Button asChild variant="outline" className="border-fiona-pink text-fiona-pink hover:bg-fiona-pink/10 rounded-md">
                <Link to="/contact">Me contacter</Link>
              </Button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="w-full md:w-1/2">
            <img 
              src="/lovable-uploads/fionapolitain.jpg" 
              alt="Fiona Politain" 
              className="w-full h-auto rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
