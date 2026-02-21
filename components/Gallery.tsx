
import React from 'react';
import { motion } from 'motion/react';

const images = [
  {
    src: "/input_file_4.png",
    alt: "Consultório acolhedor",
    title: "O Refúgio",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    src: "/input_file_1.png",
    alt: "Sandra Lopes em atendimento",
    title: "Atendimento Personalizado",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/input_file_2.png",
    alt: "Espaço de cura",
    title: "Conexão e Cuidado",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/input_file_0.png",
    alt: "Sessão de terapia",
    title: "Escuta Ativa",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    src: "/input_file_5.png",
    alt: "Sandra Lopes",
    title: "Sua Terapeuta",
    span: "md:col-span-1 md:row-span-1"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-32 px-6 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div className="space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#A67C52]">Galeria</span>
            <h2 className="text-5xl md:text-6xl font-serif text-[#1A1A1A]">Espaço de <span className="italic text-[#A67C52]">Acolhimento</span></h2>
          </div>
          <p className="text-[#1A1A1A]/60 font-light italic text-lg lg:text-right">
            "Um ambiente pensado em cada detalhe para que você se sinta segura e confortável em sua jornada de cura."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`relative group overflow-hidden rounded-2xl shadow-xl ${
                idx === 0 ? 'md:col-span-8 md:row-span-2' : 
                idx === 1 ? 'md:col-span-4 md:row-span-1' :
                idx === 2 ? 'md:col-span-4 md:row-span-1' :
                idx === 3 ? 'md:col-span-4 md:row-span-2' :
                'md:col-span-8 md:row-span-1'
              }`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <p className="text-white font-serif text-2xl italic">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
