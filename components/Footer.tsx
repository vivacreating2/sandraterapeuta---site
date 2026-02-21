
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E293B] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-8 max-w-sm">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold leading-none tracking-tight">Sandra Lopes</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#A67C52] font-semibold mt-2">Terapia Emocional</span>
            </div>
            <p className="text-white/50 font-light leading-relaxed">
              Um espaço seguro de acolhimento e transformação para mulheres que buscam redescobrir o seu equilíbrio e força interior em Lisboa.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#A67C52]">Menu</h4>
              <ul className="space-y-4 text-sm font-light text-white/70">
                <li><a href="#sobre" className="hover:text-[#A67C52] transition-colors">Sobre Mim</a></li>
                <li><a href="#terapia" className="hover:text-[#A67C52] transition-colors">O Método</a></li>
                <li><a href="#galeria" className="hover:text-[#A67C52] transition-colors">O Espaço</a></li>
                <li><a href="#artigo" className="hover:text-[#A67C52] transition-colors">Reflexões</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#A67C52]">Contacto</h4>
              <ul className="space-y-4 text-sm font-light text-white/70">
                <li>sandramaralopes61@gmail.com</li>
                <li>+351 912 987 538</li>
                <li>Lisboa, Portugal</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            © {new Date().getFullYear()} Sandra Lopes • Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-[#A67C52] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#A67C52] transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
