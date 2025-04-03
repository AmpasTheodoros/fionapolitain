
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Book, Globe, Sparkles, Twitch } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-fiona-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">À Propos de Moi</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Découvrez mon parcours, ma passion pour l'enseignement et mon approche pédagogique.
          </p>
        </div>
      </div>
      
      {/* About Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/dcacf802-2311-4f29-8781-7eeec2a569be.png" 
                alt="Fiona Politain" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-playfair text-gray-900">Qui suis-je ?</h2>
              <p className="text-gray-700">
                Bonjour ! Je m'appelle Fiona Politain, professeure d'anglais passionnée et streameuse.
                Avec plusieurs années d'expérience dans l'enseignement, j'ai développé une méthode unique
                qui combine apprentissage classique et approches modernes pour rendre l'acquisition de 
                l'anglais accessible et agréable.
              </p>
              <p className="text-gray-700">
                Ma passion pour l'enseignement et les langues m'a amenée à créer un environnement 
                d'apprentissage dynamique, où chaque élève peut progresser à son rythme tout en 
                développant une véritable confiance en ses capacités linguistiques.
              </p>
              <p className="text-gray-700">
                En plus de mes cours d'anglais, je suis également streameuse sur Twitch, où je partage 
                ma passion pour les langues, les jeux vidéo, et bien plus encore !
              </p>
            </div>
          </div>
          
          <Separator className="my-16" />
          
          {/* Expertise */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair text-gray-900 mb-4">Mon Expertise</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Je combine différentes approches pour vous offrir une expérience d'apprentissage complète.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ExpertiseCard 
              icon={<Book size={32} />}
              title="Enseignement Personnalisé"
              description="Cours adaptés à votre niveau, vos objectifs et votre style d'apprentissage."
            />
            <ExpertiseCard 
              icon={<Globe size={32} />}
              title="Anglais International"
              description="Maîtrise des différents accents et des nuances culturelles de l'anglais."
            />
            <ExpertiseCard 
              icon={<Sparkles size={32} />}
              title="Méthodes Innovantes"
              description="Utilisation d'outils modernes et de techniques d'apprentissage efficaces."
            />
            <ExpertiseCard 
              icon={<Twitch size={32} />}
              title="Contenu Numérique"
              description="Création de contenu éducatif et divertissant sur diverses plateformes."
            />
          </div>
        </div>
      </div>
      
      {/* Philosophy */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-playfair text-gray-900 mb-6">Ma Philosophie d'Enseignement</h2>
            <p className="text-gray-700 mb-8">
              Je crois fermement que l'apprentissage d'une langue doit être une expérience 
              enrichissante et agréable. Mon approche pédagogique est basée sur trois piliers fondamentaux :
            </p>
            
            <div className="space-y-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-fiona-accent mb-2">L'immersion</h3>
                <p className="text-gray-700">
                  L'immersion dans la langue est essentielle pour développer une aisance naturelle. 
                  Dans mes cours, nous pratiquons l'anglais de manière intensive tout en respectant votre niveau.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-fiona-accent mb-2">La pratique active</h3>
                <p className="text-gray-700">
                  Je privilégie une approche communicative où vous êtes activement engagé(e) dans votre apprentissage, 
                  avec de nombreuses opportunités de parler et d'interagir en anglais.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-fiona-accent mb-2">La personnalisation</h3>
                <p className="text-gray-700">
                  Chaque élève est unique, avec ses propres objectifs et défis. J'adapte mon enseignement 
                  à vos besoins spécifiques pour maximiser vos progrès.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

const ExpertiseCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
      <div className="text-fiona-pink mb-4 flex justify-center">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default About;
