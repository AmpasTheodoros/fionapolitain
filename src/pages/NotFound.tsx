
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-fiona-pink mb-4">404</h1>
          <h2 className="text-3xl font-bold font-playfair mb-6">Page Non Trouvée</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Oops ! La page que vous recherchez semble avoir disparu.
          </p>
          <Button asChild className="bg-fiona-pink hover:bg-fiona-pink/80">
            <Link to="/">Retour à l'Accueil</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
