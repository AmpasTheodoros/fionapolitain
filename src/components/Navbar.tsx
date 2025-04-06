import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300',
      scrolled ? 'bg-fiona-dark/90 shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-playfair text-2xl font-bold text-white">
            Anglais<span className="text-fiona-pink">Fiona</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">Tarifs</NavLink>
            <NavLink to="/">À Propos</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 bg-fiona-dark bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <NavLink to="/cours" onClick={() => setIsOpen(false)}>Services</NavLink>
        <NavLink to="/tarifs" onClick={() => setIsOpen(false)}>Tarifs</NavLink>
        <NavLink to="/a-propos" onClick={() => setIsOpen(false)}>À Propos</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => {
  return (
    <Link
      to={to}
      className="text-white hover:text-fiona-pink transition-colors duration-300 font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;