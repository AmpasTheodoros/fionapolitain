
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CourseBanner = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-fiona-accent to-fiona-pink">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white font-playfair mb-4">
          Prêt(e) à améliorer votre anglais ?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Découvrez mes cours particuliers d'anglais en ligne ou en présentiel 
          et commencez votre voyage vers la maîtrise de l'anglais.
        </p>
        <Button asChild className="bg-white text-fiona-accent hover:bg-white/90">
          <Link to="/contact">Réserver une séance d'essai</Link>
        </Button>
      </div>
    </div>
  );
};

export default CourseBanner;
