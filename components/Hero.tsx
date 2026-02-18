
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center pt-20 px-6 overflow-hidden scroll-mt-20">
      {/* Background Layer with Image, Texture and Color Grading */}
      <div className="absolute inset-0 z-0 bg-[#FDFBF7]">
        <div className="relative w-full h-full">
          {/* Silhueta de Yoga - Tonalidade Bege e estética de ilustração */}
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1920" 
            alt="Silhueta minimalista de yoga em tons de bege" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-multiply grayscale contrast-[1.6] brightness-[1.1] sepia-[1] saturate-[0.8] hue-rotate-[350deg]"
          />
          
          {/* Camada de Textura Orgânica (Grão de Papel) */}
          <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/natural-paper.png")` }}>
          </div>

          {/* Gradientes para suavizar a integração e melhorar legibilidade central */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/60 via-[#FDFBF7]/20 to-[#FDFBF7]"></div>
          <div className="absolute inset-0 bg-[#D4A373]/5 mix-blend-color"></div>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-4xl text-center space-y-10">
        <div className="inline-block px-6 py-1.5 rounded-full bg-[#F2E8DF]/70 backdrop-blur-md text-[#4A3F35] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 border border-[#D4A373]/40">
          Sandra Lopes | Portugal
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-8xl font-serif leading-none text-[#4A3F35] tracking-tight">
            Um refúgio para a sua <br />
            <span className="italic text-[#A67C52] block mt-4 drop-shadow-sm">alma e emoções</span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-[#6D4C41] max-w-2xl mx-auto font-light leading-relaxed opacity-90 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
          Olá, sou a Sandra. Ajudo mulheres a redescobrirem o seu equilíbrio interno através da psicoterapia emocional profunda num espaço acolhedor e seguro.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <a 
            href="#contacto" 
            onClick={(e) => scrollToSection(e, 'contacto')}
            className="w-full sm:w-auto px-12 py-5 bg-[#4A3F35] text-white rounded-lg hover:shadow-[0_25px_50px_-12px_rgba(74,63,53,0.5)] transition-all font-medium uppercase tracking-[0.2em] text-[10px] active:scale-95"
          >
            Marcar Consulta
          </a>
          <a 
            href="#terapia" 
            onClick={(e) => scrollToSection(e, 'terapia')}
            className="w-full sm:w-auto px-12 py-5 border border-[#4A3F35]/30 text-[#4A3F35] rounded-lg hover:bg-white/80 transition-all font-medium uppercase tracking-[0.2em] text-[10px] active:scale-95 shadow-sm"
          >
            Conhecer o Método
          </a>
        </div>
      </div>

      {/* Decorative Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[8px] uppercase tracking-[0.5em] text-[#A67C52] font-bold">Explorar</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#A67C52] via-[#A67C52]/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
