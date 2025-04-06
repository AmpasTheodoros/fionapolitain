
import { ThumbsUp, Users, Monitor, BookOpen } from "lucide-react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-fiona-pink/10 text-fiona-pink mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Ce que vous allez gagner
          </h2>
          <p className="text-gray-600">
            Au-delà d'apprendre l'anglais, voici les avantages concrets que vous obtiendrez en suivant mes cours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard 
            icon={<ThumbsUp size={24} />}
            title="Confiance en soi"
            description="Exprimez-vous en anglais sans hésitation dans toutes les situations, professionnelles comme personnelles."
          />
          
          <BenefitCard 
            icon={<Users size={24} />}
            title="Networking international"
            description="Élargissez votre réseau professionnel et personnel au-delà des frontières linguistiques."
          />
          
          <BenefitCard 
            icon={<Monitor size={24} />}
            title="Accès à plus d'opportunités"
            description="Augmentez vos chances d'obtenir le poste de vos rêves ou d'accéder à des études prestigieuses."
          />
          
          <BenefitCard 
            icon={<BookOpen size={24} />}
            title="Autonomie linguistique"
            description="Développez les compétences nécessaires pour continuer à progresser de façon autonome."
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
