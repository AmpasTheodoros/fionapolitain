import { GraduationCap, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SolutionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Une approche personnalisée pour maîtriser l'anglais
            </h2>
            <p className="text-gray-700 mb-8">
              En tant que professeure d'anglais certifiée et passionnée, j'offre une méthode d'apprentissage moderne, pratique et adaptée à vos objectifs spécifiques. Avec plus de 5 ans d'expérience dans l'enseignement et une présence active sur les réseaux sociaux, ma méthode allie rigueur académique et immersion culturelle contemporaine.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-fiona-pink mt-1">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Formation académique solide</h3>
                  <p className="text-gray-600">Certifiée par l'Université de Cambridge (CELTA)</p>
                  <p className="text-gray-600">BAC + 5 dans les métiers de l'enseignement et de la recherche</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-fiona-pink mt-1">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Méthode approuvée</h3>
                  <p className="text-gray-600">Plus de 200 étudiants satisfaits ayant atteint leurs objectifs linguistiques</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-fiona-pink mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Flexibilité et disponibilité</h3>
                  <p className="text-gray-600">Cours en ligne adaptés à votre emploi du temps</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="bg-fiona-pink hover:bg-fiona-pink/80 text-white">
              <Link to="https://calendly.com/fiona-khadraoui/30min">Réserver une première séance</Link>
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/fionapolitain.webp" 
              alt="Fiona Politain enseignant" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
