
import React from 'react';

const FooterLogo: React.FC = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 border border-[#D4A373]/30 rounded-full flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-6 h-6" fill="none">
        <path d="M50 85C50 85 15 65 15 40C15 25 25 15 40 15C45 15 48 18 50 20C52 18 55 15 60 15C75 15 85 25 85 40C85 65 50 85 50 85Z" stroke="#D4A373" strokeWidth="4" />
      </svg>
    </div>
    <div className="flex flex-col">
      <p className="text-xl font-serif font-bold tracking-tight text-[#4A3F35]">Sandra Lopes</p>
      <p className="text-[8px] uppercase tracking-widest text-[#BCAAA4]">Terapia Emocional</p>
    </div>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-[#F2E8DF] bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-6 max-w-sm">
            <FooterLogo />
            <p className="text-sm text-[#6D4C41] font-light leading-relaxed">
              Dedicada ao bem-estar emocional da mulher contemporânea. Um espaço seguro em Portugal para curar, crescer e florescer.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#4A3F35] hover:text-[#D4A373] transition-colors">Instagram</a>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#4A3F35] hover:text-[#D4A373] transition-colors">Facebook</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-[#4A3F35] hover:text-[#D4A373] transition-colors">GitHub</a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#BCAAA4]">Menu</h4>
              <ul className="text-sm space-y-3 text-[#6D4C41]">
                <li><a href="#inicio" className="hover:text-[#D4A373] transition-colors">Início</a></li>
                <li><a href="#terapia" className="hover:text-[#D4A373] transition-colors">A Terapia</a></li>
                <li><a href="#artigo" className="hover:text-[#D4A373] transition-colors">O Método</a></li>
                <li><a href="#contacto" className="hover:text-[#D4A373] transition-colors">Agendamento</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#BCAAA4]">Informação</h4>
              <ul className="text-sm space-y-3 text-[#6D4C41]">
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-[#D4A373] transition-colors">Termos</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#F2E8DF] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] opacity-40 uppercase tracking-[0.2em] font-medium text-[#4A3F35]">
            © {new Date().getFullYear()} Sandra Lopes • Portugal
          </p>
          <div className="flex items-center gap-3 px-4 py-2 bg-[#F2E8DF]/40 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A373] animate-pulse"></div>
            <span className="text-[9px] uppercase font-bold tracking-[0.1em] text-[#6D4C41]">Lisboa & Consultas Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
