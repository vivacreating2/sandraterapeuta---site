
import React, { useState, useEffect } from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center gap-3 group">
    <div className="relative flex items-center justify-center w-12 h-12">
      {/* Glow effect behind the heart */}
      <div className="absolute inset-0 bg-[#D4A373] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
      
      <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Abstract Heart / SL shape */}
        <path 
          d="M50 85C50 85 15 65 15 40C15 25 25 15 40 15C45 15 48 18 50 20C52 18 55 15 60 15C75 15 85 25 85 40C85 65 50 85 50 85Z" 
          stroke="#D4A373" 
          strokeWidth="2" 
          strokeLinecap="round" 
          className="opacity-30"
        />
        <path 
          d="M35 35C35 35 25 45 35 55C45 65 55 60 55 70C55 80 45 80 45 80" 
          stroke="#4A3F35" 
          strokeWidth="3" 
          strokeLinecap="round"
          className="group-hover:translate-x-1 transition-transform"
        />
        <path 
          d="M65 35L65 75C65 75 65 80 75 80" 
          stroke="#D4A373" 
          strokeWidth="3" 
          strokeLinecap="round"
          className="group-hover:-translate-x-1 transition-transform"
        />
        {/* Small "spark" or candle flame detail */}
        <circle cx="50" cy="22" r="2" fill="#D4A373" className="animate-pulse" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-serif font-bold leading-none text-[#4A3F35] tracking-tight">Sandra Lopes</span>
      <span className="text-[10px] uppercase tracking-[0.25em] text-[#BCAAA4] font-semibold mt-1">Terapia Emocional</span>
    </div>
  </div>
);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${isScrolled ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="no-underline">
          <Logo />
        </a>
        
        <div className="hidden lg:flex space-x-10 text-[11px] font-bold uppercase tracking-[0.15em] text-[#4A3F35]">
          <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="hover:text-[#D4A373] transition-colors relative group">
            Início
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A373] transition-all group-hover:w-full"></span>
          </a>
          <a href="#terapia" onClick={(e) => scrollToSection(e, 'terapia')} className="hover:text-[#D4A373] transition-colors relative group">
            A Terapia
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A373] transition-all group-hover:w-full"></span>
          </a>
          <a href="#artigo" onClick={(e) => scrollToSection(e, 'artigo')} className="hover:text-[#D4A373] transition-colors relative group">
            Sobre
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A373] transition-all group-hover:w-full"></span>
          </a>
          <a href="#depoimentos" onClick={(e) => scrollToSection(e, 'depoimentos')} className="hover:text-[#D4A373] transition-colors relative group">
            Partilhas
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A373] transition-all group-hover:w-full"></span>
          </a>
          <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="hover:text-[#D4A373] transition-colors relative group">
            Contacto
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A373] transition-all group-hover:w-full"></span>
          </a>
        </div>

        <button 
          onClick={(e) => scrollToSection(e as any, 'contacto')}
          className="bg-[#4A3F35] text-white px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#6D4C41] hover:shadow-[0_10px_20px_-5px_rgba(74,63,53,0.3)] transition-all transform hover:-translate-y-0.5"
        >
          Agendar Consulta
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
