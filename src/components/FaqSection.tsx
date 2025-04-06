import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <span className="text-fiona-pink">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 pl-4 animate-fade-in">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quel est votre tarif horaire pour les cours particuliers ?",
      answer: "Le tarif est de 20 euros pour 50 minutes"
    },
    {
      question: "Proposez-vous des cours pour tous les niveaux ?",
      answer: "Oui, j'accompagne des étudiants de tous niveaux, du débutant complet (A1) au niveau avancé (C2). Ma méthode s'adapte à votre niveau actuel et à vos objectifs."
    },
    {
      question: "Comment se déroulent les cours en ligne ?",
      answer: "Les cours en ligne se déroulent via Zoom ou Google Meet. J'utilise des supports numériques interactifs et vous recevez les documents de travail par email avant chaque séance."
    },
    {
      question: "Puis-je annuler ou reporter un cours ?",
      answer: "Oui, vous pouvez annuler ou reporter un cours jusqu'à 24 heures avant la séance sans frais. En cas d'annulation tardive, la séance sera décomptée de votre forfait."
    },
    {
      question: "Quelle est la durée recommandée pour progresser significativement ?",
      answer: "Pour constater des progrès significatifs, je recommande un minimum de 3 mois de cours hebdomadaires. Toutefois, chaque parcours est unique et nous adapterons le rythme à vos besoins."
    },
    {
      question: "Proposez-vous des préparations aux examens officiels (TOEFL, IELTS, etc.) ?",
      answer: "Absolument ! Je propose des préparations spécifiques pour tous les examens d'anglais reconnus internationalement (TOEFL, IELTS, Cambridge, TOEIC). J'ai une expérience significative dans ce domaine."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8 text-center">
            Questions fréquentes
          </h2>
          
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;