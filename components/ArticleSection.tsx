
import React from 'react';

const articles = [
  {
    id: "equilibrio",
    title: "Resgate do Equilíbrio: O Teu Porto de Abrigo",
    subtitle: "Navegar pelas emoções sem se deixar dominar por elas.",
    content: "Viver em Portugal hoje, entre a azáfama de cidades como Lisboa ou Porto, exige um esforço constante de adaptação. O equilíbrio não é um estado estático de paz absoluta, mas sim a habilidade de navegar nas ondas emocionais sem que o barco se vire. Na terapia, trabalhamos a regulação do sistema nervoso. Aprendemos a identificar quando o stress se torna crónico e como baixar o volume da autocrítica. Resgatar o equilíbrio é permitir-se parar, respirar e entender que nem todos os pensamentos são factos.",
    quote: "O equilíbrio é a coragem de dizer 'não' ao mundo para dizer 'sim' à nossa paz."
  },
  {
    id: "autoconhecimento",
    title: "A Jornada do Autoconhecimento",
    subtitle: "Identificar padrões e raízes profundas dos seus bloqueios.",
    content: "Muitas das nossas reações atuais são ecos de necessidades não atendidas no passado. O autoconhecimento é o processo de 'acender a luz' em quartos da nossa mente que mantivemos fechados por medo ou dor. Ao identificarmos os padrões que repetimos nas nossas escolhas — sejam elas profissionais ou amorosas — ganhamos o poder da escolha consciente. Deixamos de ser reféns da nossa história para nos tornarmos as autoras do nosso presente. É um mergulho profundo, por vezes desafiante, mas profundamente libertador.",
    quote: "Conhecer a própria sombra é o primeiro passo para caminhar na luz com integridade."
  },
  {
    id: "relacoes",
    title: "Relações Saudáveis e Limites",
    subtitle: "Aprender a comunicar e estabelecer fronteiras de amor.",
    content: "Como mulheres, fomos muitas vezes ensinadas a cuidar dos outros antes de nós mesmas. No entanto, uma relação só é saudável quando há espaço para dois indivíduos inteiros. Estabelecer limites não é um ato de egoísmo, mas de preservação. Na terapia, exploramos como comunicar necessidades de forma clara e assertiva, sem culpa. Aprendemos que o amor não deve custar a nossa saúde mental. Relações nutridas por limites claros tornam-se jardins onde o afeto pode crescer sem asfixiar.",
    quote: "Limites são as fronteiras que ensinam os outros como nos devem amar."
  }
];

const ArticleSection: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="artigo" className="py-32 px-6 bg-[#F8F5F2] scroll-mt-24">
      <div className="max-w-6xl mx-auto space-y-32">
        
        <header className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#A67C52]">Espaço de Reflexão</span>
          <h2 className="text-5xl md:text-6xl font-serif text-[#1A1A1A] leading-tight">Palavras que <span className="italic text-[#A67C52]">Acolhem e Curam</span></h2>
        </header>

        <div className="grid lg:grid-cols-3 gap-16">
          {articles.map((article) => (
            <article key={article.id} className="group space-y-10 flex flex-col h-full">
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-[#1A1A1A] group-hover:text-[#A67C52] transition-colors duration-500">
                  {article.title}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#A67C52] font-bold italic">
                  {article.subtitle}
                </p>
              </div>
              
              <div className="text-[#1A1A1A]/70 font-light leading-relaxed text-lg">
                <p>{article.content}</p>
              </div>

              <div className="pt-8 border-t border-[#1E293B]/10 mt-auto">
                <blockquote className="text-lg italic font-serif text-[#A67C52] leading-snug">
                  "{article.quote}"
                </blockquote>
              </div>
            </article>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white p-16 md:p-24 rounded-2xl shadow-2xl text-center space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 text-8xl opacity-[0.03] pointer-events-none font-serif italic">S</div>
          
          <h4 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] italic leading-tight">
            "A saúde emocional não é a ausência de dor, mas a presença de ferramentas para lidar com ela."
          </h4>
          
          <p className="text-[#1A1A1A]/60 font-light max-w-xl mx-auto leading-relaxed text-lg">
            Se te revês nestas palavras e sentes que é o momento de cuidar de ti, o meu consultório em Lisboa está aberto para te receber.
          </p>

          <div className="pt-6">
            <a 
              href="#contacto" 
              onClick={scrollToContact}
              className="inline-flex items-center gap-6 px-12 py-5 bg-[#1E293B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#A67C52] transition-all"
            >
              Agendar Primeira Sessão <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
