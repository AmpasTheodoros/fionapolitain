
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Instagram, Mail, MessageCircle, Twitch, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-fiona-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Contact</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Des questions ? Besoin d'informations ? N'hésitez pas à me contacter.
          </p>
        </div>
      </div>
      
      {/* Contact Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-playfair mb-6">Contactez-moi</h2>
              <p className="text-gray-600 mb-8">
                Je suis disponible pour répondre à toutes vos questions concernant mes cours d'anglais. 
                Remplissez le formulaire ci-dessous ou utilisez les informations de contact pour me joindre directement.
              </p>
              
              <div className="space-y-6">
                <ContactMethod 
                  icon={<Mail size={24} />}
                  title="Email"
                  details="fiona.khadraoui@gmail.com"
                  link="mailto:fiona.khadraoui@gmail.com"
                />
                
                <ContactMethod 
                  icon={<Instagram size={24} />}
                  title="Instagram"
                  details="@fionapolitain"
                  link="https://instagram.com/fionapolitain"
                />
                
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold font-playfair mb-6">Formulaire de Contact</h2>
              <iframe src="https://calendly.com/fiona-khadraoui/30min" height="300" width="600"/>         
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string;
}

const ContactMethod = ({ icon, title, details, link }: ContactMethodProps) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className="text-fiona-pink mr-4">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">{details}</p>
      </div>
    </a>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default Contact;
