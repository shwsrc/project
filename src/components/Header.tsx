import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#9E7B7B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="image/ceci.jpg" 
              alt="Uzzececii" 
              className="h-12"
            />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-pink-200 transition-colors duration-200 text-lg"
            >
              Produtos
            </Link>
            <Link 
              to="/guia-de-medidas" 
              className="text-white hover:text-pink-200 transition-colors duration-200 text-lg"
            >
              Guia de Medidas
            </Link>
            <Link 
              to="/contato" 
              className="text-white hover:text-pink-200 transition-colors duration-200 text-lg"
            >
              Contato
            </Link>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#9E7B7B]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-pink-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                to="/guia-de-medidas"
                className="block px-3 py-2 text-base font-medium text-white hover:text-pink-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Guia de Medidas
              </Link>
              <Link
                to="/contato"
                className="block px-3 py-2 text-base font-medium text-white hover:text-pink-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}