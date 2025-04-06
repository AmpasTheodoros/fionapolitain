
import { Link } from 'react-router-dom';
import { Instagram, Twitch, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fiona-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">Anglais<span className="text-fiona-pink">Fiona</span></h3>
            <p className="text-gray-300">Professeur d'anglais passionnée</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-lg">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-fiona-pink transition-colors">Accueil</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-fiona-pink transition-colors">À Propos</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-fiona-pink transition-colors">Cours d'Anglais</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-fiona-pink transition-colors">Tarifs</Link></li>
              <li><Link to="https://calendly.com/fiona-khadraoui/30min" className="text-gray-300 hover:text-fiona-pink transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-lg">Contact</h4>
            <p className="text-gray-300">fiona.khadraoui@gmail.com</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/fionapolitain" target="_blank" rel="noopener noreferrer" className="hover:text-fiona-pink transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          

          <div className="space-y-4">
            <h4 className="font-medium text-lg">Légal</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-fiona-pink transition-colors">Mentions Légales</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-fiona-pink transition-colors">Politique de Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AnglaisFiona. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
