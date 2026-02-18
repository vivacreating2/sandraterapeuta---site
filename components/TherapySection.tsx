
import React from 'react';

const reflections = [
  {
    title: "O Resgate do Equilíbrio",
    excerpt: "Navegar pelas emoções sem se deixar dominar por elas. A terapia emocional ajuda a encontrar a serenidade necessária para enfrentar o caos.",
    label: "Equilíbrio"
  },
  {
    title: "Mergulho no Autoconhecimento",
    excerpt: "Identificar padrões repetitivos e as raízes profundas dos seus bloqueios. Revelar a sua versão mais autêntica e livre.",
    label: "Crescimento"
  },
  {
    title: "A Arte das Relações Saudáveis",
    excerpt: "Melhorar a forma como comunica consigo mesma e com os outros. Aprender a estabelecer limites que protegem a sua energia.",
    label: "Conexão"
  },
  {
    title: "Silenciando a Ansiedade",
    excerpt: "Ferramentas práticas para gerir o stress e o burnout. No nosso refúgio, trabalhamos para que o seu sistema nervoso se sinta seguro.",
    label: "Bem-estar"
  }
];

const TherapySection: React.FC = () => {
  return (
    <section id="terapia" className="py-32 px-6 bg-[#FDFBF7] scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Lado Esquerdo - Título e Imagem da Consulta */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4A373]">A Nossa Jornada</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#4A3F35] leading-tight">
                Espaços de <span className="italic text-[#D4A373]">Cura e Reflexão</span>
              </h2>
            </div>
            
            <p className="text-lg font-light leading-relaxed text-[#6D4C41]">
              A terapia emocional é um convite para olhar para dentro num ambiente onde a empatia é o guia constante de cada sessão.
            </p>

            <div className="relative group overflow-hidden rounded-[40px] mt-12 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800" 
                alt="Escuta ativa e acolhimento em consulta" 
                className="w-full h-[540px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A3F35]/80 via-[#4A3F35]/20 to-transparent"></div>
              
              {/* Overlay solicitado */}
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <div className="w-12 h-[1px] bg-[#D4A373] mb-4"></div>
                <p className="text-xs uppercase tracking-[0.3em] font-bold mb-3 text-[#D4A373]">Ambiente Seguro</p>
                <p className="text-2xl font-serif italic leading-snug">"Onde a luz encontra a paz."</p>
              </div>
            </div>
          </div>

          {/* Lado Direito - Lista de Reflexões */}
          <div className="lg:col-span-7 space-y-16 lg:pl-12">
            {reflections.map((item, idx) => (
              <article key={idx} className="group border-b border-[#F2E8DF] pb-12 last:border-0 relative">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#D4A373] bg-[#D4A373]/5 px-2 py-1 rounded">
                    {item.label}
                  </span>
                  <div className="h-[1px] w-8 bg-[#D4A373]/30"></div>
                </div>
                
                <h3 className="text-2xl font-serif text-[#4A3F35] mb-4 group-hover:text-[#D4A373] transition-colors duration-500">
                  {item.title}
                </h3>
                
                <p className="text-[#6D4C41] leading-relaxed font-light text-lg italic opacity-90">
                  "{item.excerpt}"
                </p>
                
                <div className="absolute -left-6 top-0 w-[2px] h-0 bg-[#D4A373] group-hover:h-full transition-all duration-700 opacity-50 shadow-[0_0_15px_#D4A373]"></div>
              </article>
            ))}

            <div className="pt-8">
              <a 
                href="#contacto" 
                className="inline-flex items-center gap-4 text-[#4A3F35] font-bold uppercase tracking-[0.2em] text-[10px] group bg-white px-8 py-4 rounded-full border border-[#F2E8DF] hover:shadow-lg transition-all"
              >
                Começar a minha jornada <span className="text-lg transition-transform group-hover:translate-x-2 text-[#D4A373]">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TherapySection;
