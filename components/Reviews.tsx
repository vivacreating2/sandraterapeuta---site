
import React from 'react';

const testimonials = [
  {
    name: "Maria Silva",
    location: "Lisboa",
    text: "A minha vida mudou completamente. Aprendi a colocar limites e a gostar da minha própria companhia. O consultório é tão acolhedor que não dá vontade de sair.",
    stars: 5
  },
  {
    name: "Ana Oliveira",
    location: "Porto (Online)",
    text: "Mesmo sendo online, senti uma conexão e um calor humano incríveis. As ferramentas que recebi ajudaram-me imenso a gerir a ansiedade no trabalho.",
    stars: 5
  },
  {
    name: "Catarina Santos",
    location: "Cascais",
    text: "Uma profissional de excelência. Sinto que finalmente tenho voz e sei o que quero para o meu futuro. Recomendo a todas as mulheres.",
    stars: 5
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="depoimentos" className="py-32 px-6 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#A67C52]">Testemunhos</span>
          <h2 className="text-5xl md:text-6xl font-serif text-[#1A1A1A]">O que dizem as <span className="italic text-[#A67C52]">nossas pacientes</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="space-y-8 p-10 bg-[#F8F5F2] rounded-2xl transition-all duration-500 hover:shadow-xl">
              <div className="flex text-[#A67C52] text-xs">
                {[...Array(t.stars)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-[#1A1A1A]/80 italic font-serif text-xl leading-relaxed">"{t.text}"</p>
              <div className="pt-6 border-t border-[#1E293B]/10">
                <p className="font-bold text-[10px] uppercase tracking-widest text-[#1A1A1A]">{t.name}</p>
                <p className="text-[10px] text-[#A67C52] uppercase tracking-widest mt-1">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
