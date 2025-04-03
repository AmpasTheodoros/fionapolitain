
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-fiona-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Mes Cours d'Anglais</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Des formules adaptées à tous les niveaux et à tous les objectifs pour apprendre l'anglais efficacement.
          </p>
        </div>
      </div>
      
      {/* Course Offerings */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="individual" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="individual">Cours Particuliers</TabsTrigger>
              <TabsTrigger value="group">Cours en Groupe</TabsTrigger>
              <TabsTrigger value="intensive">Cours Intensifs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold font-playfair mb-4">Cours Particuliers</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Des cours personnalisés pour progresser à votre rythme et selon vos objectifs spécifiques.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                  title="Débutant"
                  price="35€"
                  description="Pour ceux qui débutent en anglais"
                  features={[
                    "1 séance de 60 minutes par semaine",
                    "Matériel pédagogique inclus",
                    "Exercices pratiques à faire chez soi",
                    "Suivi de progression personnalisé"
                  ]}
                />
                
                <PricingCard
                  title="Intermédiaire"
                  price="45€"
                  description="Pour améliorer votre anglais courant"
                  features={[
                    "1 séance de 60 minutes par semaine",
                    "Matériel pédagogique inclus",
                    "Conversation en anglais",
                    "Exercices de compréhension orale",
                    "Suivi de progression personnalisé"
                  ]}
                  highlighted
                />
                
                <PricingCard
                  title="Avancé"
                  price="55€"
                  description="Pour perfectionner votre anglais"
                  features={[
                    "1 séance de 60 minutes par semaine",
                    "Discussions sur des sujets complexes",
                    "Perfectionnement de l'accent",
                    "Préparation aux certifications",
                    "Accès à des ressources premium"
                  ]}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="group" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold font-playfair mb-4">Cours en Groupe</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Apprenez l'anglais en petit groupe dans une ambiance conviviale et interactive.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                  title="Mini Groupe"
                  price="25€"
                  description="Groupe de 3-4 personnes"
                  features={[
                    "1 séance de 90 minutes par semaine",
                    "Matériel pédagogique inclus",
                    "Activités interactives",
                    "Pratique de la conversation"
                  ]}
                />
                
                <PricingCard
                  title="Groupe Standard"
                  price="20€"
                  description="Groupe de 5-8 personnes"
                  features={[
                    "1 séance de 90 minutes par semaine",
                    "Matériel pédagogique inclus",
                    "Activités interactives",
                    "Pratique de la conversation",
                    "Exercices en binôme"
                  ]}
                  highlighted
                />
                
                <PricingCard
                  title="Club de Conversation"
                  price="15€"
                  description="Groupe de discussion libre"
                  features={[
                    "1 séance de 60 minutes par semaine",
                    "Thèmes de discussion variés",
                    "Ambiance détendue",
                    "Amélioration de la fluidité",
                    "Correction personnalisée"
                  ]}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="intensive" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold font-playfair mb-4">Cours Intensifs</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Progressez rapidement avec des programmes intensifs pour des résultats rapides.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                  title="Week-end Intensif"
                  price="180€"
                  description="2 jours de formation intensive"
                  features={[
                    "10 heures de cours sur un week-end",
                    "Matériel pédagogique inclus",
                    "Déjeuner inclus",
                    "Maximum 6 participants",
                    "Certificat de participation"
                  ]}
                />
                
                <PricingCard
                  title="Semaine Intensive"
                  price="450€"
                  description="Programme d'une semaine"
                  features={[
                    "20 heures de cours sur 5 jours",
                    "Matériel pédagogique complet",
                    "Déjeuners inclus",
                    "Maximum 6 participants",
                    "Évaluation de niveau en fin de semaine"
                  ]}
                  highlighted
                />
                
                <PricingCard
                  title="Préparation TOEFL/IELTS"
                  price="550€"
                  description="Programme spécial certification"
                  features={[
                    "24 heures de cours sur 2 semaines",
                    "Tests blancs inclus",
                    "Techniques spécifiques à l'examen",
                    "Suivi individuel",
                    "Garantie de résultat"
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Course Approach */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-playfair mb-4">Ma Méthode d'Enseignement</h2>
              <p className="text-gray-600">
                J'ai développé une approche efficace qui vous aidera à progresser rapidement.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">1. Évaluation Initiale</h3>
                <p className="text-gray-600">
                  Nous commençons par une évaluation complète de votre niveau actuel, de vos objectifs 
                  et de votre style d'apprentissage pour créer un plan personnalisé.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">2. Programme Sur Mesure</h3>
                <p className="text-gray-600">
                  Je développe un programme sur mesure qui cible spécifiquement les domaines que vous 
                  souhaitez améliorer, qu'il s'agisse de conversation, de grammaire ou de vocabulaire.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">3. Apprentissage Actif</h3>
                <p className="text-gray-600">
                  Mes cours mettent l'accent sur la pratique active de la langue à travers des discussions, 
                  des jeux de rôle et des exercices interactifs.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">4. Suivi Régulier</h3>
                <p className="text-gray-600">
                  Je réalise un suivi régulier de vos progrès et adapte continuellement le programme 
                  pour répondre à vos besoins évolutifs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-playfair mb-4">Intéressé(e) par mes cours ?</h2>
              <p className="text-gray-600">
                Contactez-moi pour discuter de vos besoins ou pour réserver une séance d'essai.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard = ({ title, price, description, features, highlighted = false }: PricingCardProps) => {
  return (
    <Card className={`overflow-hidden ${highlighted ? 'border-fiona-pink ring-2 ring-fiona-pink/20' : ''}`}>
      <CardHeader className={`${highlighted ? 'bg-fiona-pink text-white' : 'bg-gray-50'}`}>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className={highlighted ? 'text-white/90' : ''}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-500 ml-1">/ séance</span>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${highlighted ? 'bg-fiona-pink hover:bg-fiona-pink/90' : 'bg-gray-800 hover:bg-gray-700'}`}
        >
          Réserver
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Courses;
