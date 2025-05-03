import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import logoff from "../assets/logo.png"; // Caminho correto a partir de components/Layout.tsx

const Layout: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-serif bg-white text-gray-900">
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-md bg-white/70 shadow-md py-2' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center group"
          >
            {/* Logo da empresa com tamanho ajustado */}
            <img 
              src={logoff}
              alt="Logo da Fragância Feminina"
              className="h-12 w-auto transition-transform group-hover:scale-110" // Ajuste para h-10
            />
          </Link>

          {/* Menu de navegação - mostrando para todas as telas (desktop e mobile) */}
          <nav className="flex space-x-8">
            <Link 
              to="/" 
              className={`relative font-sans text-sm uppercase tracking-wider transition-all duration-300 px-4 py-2 rounded-full overflow-hidden group ${
                location.pathname === '/' ? 'text-white' : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              <span className={`absolute inset-0 w-full h-full transition-all duration-300 rounded-full ${
                location.pathname === '/' ? 'bg-pink-500' : 'bg-transparent group-hover:bg-pink-50'
              }`}></span>
              <span className="relative">Início</span>
            </Link>
            <Link 
              to="/sobre" 
              className={`relative font-sans text-sm uppercase tracking-wider transition-all duration-300 px-4 py-2 rounded-full overflow-hidden group ${
                location.pathname === '/sobre' ? 'text-white' : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              <span className={`absolute inset-0 w-full h-full transition-all duration-300 rounded-full ${
                location.pathname === '/sobre' ? 'bg-pink-500' : 'bg-transparent group-hover:bg-pink-50'
              }`}></span>
              <span className="relative">Sobre Nós</span>
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="pt-24">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </main>
      
      <footer className="bg-pink-50 py-12 mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center group">
                <Sparkles className="h-5 w-5 text-pink-500 mr-2 transition-transform group-hover:scale-110" />
                <span className="font-serif text-lg font-bold text-pink-800">Fragância Feminina</span>
              </Link>
              <p className="mt-2 text-sm text-gray-600 font-sans">Perfume luxuoso, feito com paixão</p>
            </div>
            
            <div className="flex space-x-8">
              <Link to="/" className="text-sm text-gray-600 hover:text-pink-500 transition-colors">Início</Link>
              <Link to="/sobre" className="text-sm text-gray-600 hover:text-pink-500 transition-colors">Sobre Nós</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-pink-100 text-center">
            <p className="text-xs text-gray-500 font-sans">© {new Date().getFullYear()} Fragância Feminina. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
