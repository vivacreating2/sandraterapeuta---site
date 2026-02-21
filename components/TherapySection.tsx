
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
    <section id="terapia" className="py-32 px-6 bg-[#F8F5F2] scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          
          {/* Lado Esquerdo - Título e Imagem da Consulta */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#A67C52]">A Nossa Jornada</span>
              <h2 className="text-5xl md:text-6xl font-serif text-[#1A1A1A] leading-tight">
                Espaços de <span className="italic text-[#A67C52]">Cura e Reflexão</span>
              </h2>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/input_file_0.png" 
                alt="Sandra Lopes em consulta" 
                className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <p className="text-xs uppercase tracking-[0.3em] font-bold mb-3 text-[#A67C52]">Ambiente Seguro</p>
                <p className="text-2xl font-serif italic leading-snug">"Onde a luz encontra a paz."</p>
              </div>
            </div>
          </div>

          {/* Lado Direito - Lista de Reflexões */}
          <div className="lg:col-span-6 space-y-16 lg:pt-24">
            <div className="space-y-6 text-lg font-light leading-relaxed text-[#1A1A1A]/80">
              <p>
                A Terapia é um processo focado na identificação, compreensão e transformação das emoções que impactam as suas escolhas e relacionamentos.
              </p>
              <p>
                Trabalhamos na raiz dos padrões inconscientes, ajudando a reorganizar sentimentos e libertar bloqueios que a impedem de viver plenamente.
              </p>
            </div>

            <div className="space-y-12">
              {reflections.map((item, idx) => (
                <article key={idx} className="group relative pl-8 border-l border-[#1E293B]/10 hover:border-[#A67C52] transition-colors duration-500">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#A67C52] block mb-2">
                    {item.label}
                  </span>
                  <h3 className="text-2xl font-serif text-[#1A1A1A] mb-3 group-hover:text-[#A67C52] transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-[#1A1A1A]/70 leading-relaxed font-light italic">
                    "{item.excerpt}"
                  </p>
                </article>
              ))}
            </div>

            <div className="pt-8">
              <a 
                href="#contacto" 
                className="inline-flex items-center gap-6 px-12 py-5 bg-[#1E293B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#A67C52] transition-all shadow-xl shadow-[#1E293B]/10"
              >
                Começar a minha jornada <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TherapySection;
