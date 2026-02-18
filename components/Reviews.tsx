
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
    <section id="depoimentos" className="py-24 px-6 bg-[#F2E8DF]/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-serif text-[#4A3F35]">O que dizem as nossas <span className="italic text-[#D4A373]">mulheres</span></h2>
          <p className="text-[#6D4C41] font-light">Partilhas de quem já percorreu o caminho.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-[#F2E8DF] relative">
              <div className="flex text-[#D4A373] mb-4">
                {[...Array(t.stars)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-[#4A3F35] italic font-light mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-sm uppercase tracking-wider text-[#4A3F35]">{t.name}</p>
                <p className="text-xs text-[#BCAAA4]">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
