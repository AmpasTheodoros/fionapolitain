import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ActionPlanSection = () => {
  return (
    <section className="py-16 bg-fiona-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Comment commencer ?
          </h2>
          <p className="text-gray-300">
            Un processus simple en trois étapes pour démarrer votre apprentissage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 p-6 rounded-lg relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-fiona-pink flex items-center justify-center text-lg font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mb-4 mt-2">Réservez votre séance de découverte</h3>
            <p className="text-gray-300 mb-6">
              Prenez rendez-vous pour une première séance d'évaluation de 50 minutes.
            </p>
            <div className="flex justify-center">
              <ArrowRight className="text-fiona-pink" size={24} />
            </div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-fiona-pink flex items-center justify-center text-lg font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-4 mt-2">Définissons votre plan personnalisé</h3>
            <p className="text-gray-300 mb-6">
              Ensemble, nous établirons un programme sur mesure adapté à vos objectifs et à votre niveau.
            </p>
            <div className="flex justify-center">
              <ArrowRight className="text-fiona-pink" size={24} />
            </div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-fiona-pink flex items-center justify-center text-lg font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-4 mt-2">Commencez votre progression</h3>
            <p className="text-gray-300 mb-6">
              Démarrez vos cours réguliers et constatez rapidement vos progrès semaine après semaine.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-fiona-pink hover:bg-fiona-pink/80 text-white px-8 py-6 text-lg">
            <Link to="https://calendly.com/fiona-khadraoui/30min">Je réserve ma séance découverte</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActionPlanSection;
