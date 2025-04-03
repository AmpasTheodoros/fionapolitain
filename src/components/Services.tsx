
import { BookOpen, Users, Video, MessageCircle } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2">
      <div className="text-fiona-pink mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Mes Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Je propose différentes formules pour vous aider à progresser en anglais, adaptées à vos besoins et à votre niveau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<BookOpen size={36} />}
            title="Cours Particuliers"
            description="Des cours d'anglais personnalisés pour progresser à votre rythme et selon vos objectifs spécifiques."
          />
          <ServiceCard
            icon={<Users size={36} />}
            title="Cours en Groupe"
            description="Apprenez l'anglais en petit groupe dans une ambiance conviviale et interactive pour pratiquer la conversation."
          />
          <ServiceCard
            icon={<Video size={36} />}
            title="Cours en Ligne"
            description="Des cours à distance via visioconférence pour apprendre l'anglais où que vous soyez."
          />
          <ServiceCard
            icon={<MessageCircle size={36} />}
            title="Coaching Linguistique"
            description="Un accompagnement personnalisé pour améliorer votre anglais dans un contexte professionnel ou personnel."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
