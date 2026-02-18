
import React from 'react';

const ArticleSection: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="artigo" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A3F35]">Porquê priorizar a sua Saúde Emocional hoje?</h2>
          <div className="w-24 h-1 bg-[#D4A373] mx-auto"></div>
        </header>

        <article className="prose prose-lg text-[#4A3F35] font-light leading-relaxed space-y-6">
          <p>
            Numa sociedade que valoriza a produtividade acima da presença, as emoções são frequentemente varridas para debaixo do tapete. Para nós, mulheres, isso manifesta-se em ansiedade silenciosa, insónias e uma sensação de vazio, mesmo quando "temos tudo".
          </p>
          
          <blockquote className="border-l-4 border-[#D4A373] pl-6 italic text-xl font-serif text-[#6D4C41] my-8">
            "A terapia não é sobre consertar o que está partido, mas sobre descobrir a inteireza que sempre esteve lá."
          </blockquote>

          <p>
            Em Portugal, temos visto um aumento significativo na procura por acompanhamento psicológico. A terapia emocional permite-lhe olhar para a sua história não como um fardo, mas como um mapa. Aprender a ouvir o que o seu corpo e o seu coração dizem é o primeiro passo para uma vida com propósito.
          </p>

          <h3 className="text-2xl font-serif font-bold pt-4 text-[#4A3F35]">O que acontece numa sessão?</h3>
          <p>
            Imagine um café com uma amiga sábia, mas com o rigor técnico de quem entende o funcionamento do cérebro. Utilizamos ferramentas da Terapia Cognitivo-Comportamental (TCC) misturadas com abordagens humanistas, sempre à luz de velas (ou num ambiente de luz suave), para garantir que o seu sistema nervoso se sente seguro para relaxar.
          </p>
        </article>

        <div className="bg-[#F2E8DF] p-10 rounded-3xl text-center space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 text-4xl opacity-20 text-[#4A3F35]">🕯️</div>
          <h4 className="text-xl font-serif italic text-[#4A3F35]">Pronta para começar a sua jornada?</h4>
          <p className="text-sm font-medium uppercase tracking-widest text-[#6D4C41]">As vagas para novos pacientes estão abertas.</p>
          <a 
            href="#contacto" 
            onClick={scrollToContact}
            className="inline-block px-8 py-3 bg-[#4A3F35] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Quero agendar a primeira sessão
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
