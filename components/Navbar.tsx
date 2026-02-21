
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="no-underline">
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold leading-none text-[#1A1A1A] tracking-tight">Sandra Lopes</span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#A67C52] font-semibold mt-1.5">Terapia Emocional</span>
          </div>
        </a>
        
        <div className="hidden lg:flex space-x-10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
          <a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="hover:text-[#A67C52] transition-colors">Sobre</a>
          <a href="#terapia" onClick={(e) => scrollToSection(e, 'terapia')} className="hover:text-[#A67C52] transition-colors">Método</a>
          <a href="#galeria" onClick={(e) => scrollToSection(e, 'galeria')} className="hover:text-[#A67C52] transition-colors">Espaço</a>
          <a href="#artigo" onClick={(e) => scrollToSection(e, 'artigo')} className="hover:text-[#A67C52] transition-colors">Reflexões</a>
        </div>

        <button 
          onClick={(e) => scrollToSection(e as any, 'contacto')}
          className="bg-[#1E293B] text-white px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#A67C52] transition-all"
        >
          Agendar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
