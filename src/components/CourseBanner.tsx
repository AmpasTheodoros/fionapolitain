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
          Prenez le contrôle de votre avenir linguistique dès maintenant. 
          La première séance de découverte est gratuite et sans engagement.
        </p>
        <Button asChild size="lg" className="bg-white text-fiona-accent hover:bg-white/90 px-8 py-6 text-lg font-medium">
          <Link to="https://calendly.com/fiona-khadraoui/30min">Je réserve ma séance gratuite</Link>
        </Button>
      </div>
    </div>
  );
};

export default CourseBanner;