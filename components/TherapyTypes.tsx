
import React from 'react';

const approaches = [
  {
    title: "Terapia Cognitivo-Comportamental",
    description: "Uma abordagem focada no presente que ajuda a identificar e transformar padrões de pensamento e comportamentos que geram sofrimento.",
    icon: "🧠"
  },
  {
    title: "Psicoterapia Humanista",
    description: "Foca no potencial humano e na capacidade de crescimento, valorizando a experiência subjetiva e a autenticidade de cada indivíduo.",
    icon: "✨"
  },
  {
    title: "Terapia Focada nas Emoções (EFT)",
    description: "Ajuda a processar e transformar emoções difíceis, promovendo uma conexão mais profunda e saudável consigo mesma e com os outros.",
    icon: "❤️"
  },
  {
    title: "Mindfulness e Regulação",
    description: "Técnicas de atenção plena para acalmar o sistema nervoso, reduzir a ansiedade e cultivar uma presença consciente e compassiva.",
    icon: "🌿"
  }
];

const TherapyTypes: React.FC = () => {
  return (
    <section id="abordagens" className="py-32 px-6 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-24 space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#A67C52]">Metodologia</span>
          <h2 className="text-5xl md:text-6xl font-serif text-[#1A1A1A]">Caminhos para a <span className="italic text-[#A67C52]">Cura</span></h2>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {approaches.map((item, idx) => (
            <div 
              key={idx} 
              className="group space-y-8"
            >
              <div className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-100">
                {item.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-[#1A1A1A] group-hover:text-[#A67C52] transition-colors">
                  {item.title}
                </h3>
                <p className="text-base text-[#1A1A1A]/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapyTypes;
