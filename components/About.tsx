import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 px-6 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/input_file_3.png" 
                alt="Sandra Lopes" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Detail */}
            <div className="absolute -bottom-10 -left-10 bg-[#1E293B] text-white p-8 rounded-2xl shadow-2xl hidden md:block max-w-[280px]">
              <p className="font-serif italic text-xl leading-snug">"A cura começa quando você tem coragem de olhar para a sua própria história."</p>
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#A67C52]">A sua terapeuta</span>
              <h2 className="text-5xl md:text-6xl font-serif text-[#1A1A1A] leading-tight">
                Sandra Lopes
              </h2>
              <p className="text-[#A67C52] font-medium uppercase tracking-[0.2em] text-xs">
                Especialista no Universo Feminino – TEPM
              </p>
            </div>

            <div className="space-y-6 text-[#1A1A1A]/80 font-light leading-relaxed text-lg">
              <p>
                Dedico a minha missão a ajudar mulheres que se sentem presas emocionalmente, sobrecarregadas ou desconectadas de si mesmas. Através da Terapia das Emoções, conduzimos um processo profundo de ressignificação.
              </p>
              
              <p>
                Muitas vezes, os padrões que repetimos hoje têm raízes em experiências passadas. O meu papel é ajudá-la a olhar para essas raízes com consciência e acolhimento, transformando a dor em força e clareza.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#F8F5F2]">
              <div>
                <p className="text-3xl font-serif text-[#1A1A1A]">15+</p>
                <p className="text-[10px] uppercase tracking-widest text-[#A67C52] mt-1">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-[#1A1A1A]">500+</p>
                <p className="text-[10px] uppercase tracking-widest text-[#A67C52] mt-1">Vidas Transformadas</p>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="#contacto" 
                className="inline-flex items-center gap-4 text-[#1A1A1A] font-bold uppercase tracking-[0.2em] text-[10px] group"
              >
                Agendar uma conversa <span className="w-8 h-[1px] bg-[#A67C52] transition-all group-hover:w-12"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
