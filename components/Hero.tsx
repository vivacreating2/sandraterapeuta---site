
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const phrases = [
  "Um refúgio para a sua alma e emoções",
  "Você está carregando histórias que ainda não foram curadas.",
  "A cura começa quando você tem coragem de olhar para a sua própria história.",
  "Chegou o momento de romper padrões e reconstruir quem você nasceu para ser.",
  "Mulheres emocionalmente livres constroem destinos extraordinários.",
  "Enquanto você não cura o que dói, continuará vivendo o que machuca."
];

const Hero: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center pt-20 px-6 overflow-hidden scroll-mt-20">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-[#F8F5F2]">
        <div className="relative w-full h-full">
          <img 
            src="/input_file_4.png" 
            alt="Consultório de Sandra Lopes" 
            className="w-full h-full object-cover object-center opacity-50"
          />
          
          {/* Subtle Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5F2]/40 via-transparent to-[#F8F5F2]"></div>
          <div className="absolute inset-0 bg-[#1E293B]/5 mix-blend-multiply"></div>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-6xl w-full">
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[#A67C52] block">Psicoterapia Emocional Profunda</span>
            <div className="min-h-[160px] md:min-h-[220px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h1 
                  key={currentPhrase}
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.02, y: -20 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-7xl font-serif leading-[1.1] text-[#1A1A1A] tracking-tight max-w-5xl"
                >
                  {phrases[currentPhrase].includes("alma e emoções") ? (
                    <>
                      Um refúgio para a sua <br />
                      <span className="italic text-[#A67C52] block mt-4">alma e emoções</span>
                    </>
                  ) : (
                    <span className="block">{phrases[currentPhrase]}</span>
                  )}
                </motion.h1>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="text-lg md:text-xl text-[#1A1A1A] max-w-2xl mx-auto font-light leading-relaxed"
          >
            Olá, sou a Sandra. Ajudo mulheres a redescobrirem o seu equilíbrio interno através da psicoterapia emocional profunda num espaço acolhedor e seguro em Lisboa.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4"
          >
            <a 
              href="#contacto" 
              onClick={(e) => scrollToSection(e, 'contacto')}
              className="group relative px-12 py-5 bg-[#1E293B] text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1E293B]/20"
            >
              <span className="relative z-10 font-medium uppercase tracking-[0.2em] text-[10px]">Marcar Consulta</span>
              <div className="absolute inset-0 bg-[#A67C52] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <a 
              href="#terapia" 
              onClick={(e) => scrollToSection(e, 'terapia')}
              className="px-12 py-5 border border-[#1E293B]/20 text-[#1E293B] rounded-full hover:bg-white transition-all font-medium uppercase tracking-[0.2em] text-[10px]"
            >
              Conhecer o Método
            </a>
          </motion.div>
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
