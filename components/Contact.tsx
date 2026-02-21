
import React, { useState } from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-32 px-6 bg-[#F8F5F2] scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#1E293B] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="md:w-2/5 p-16 bg-[#1E293B] text-white flex flex-col justify-between space-y-12">
            <div className="space-y-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#A67C52]">Contacto</span>
              <h2 className="text-5xl font-serif leading-tight">Vamos <span className="italic">conversar?</span></h2>
              <p className="font-light opacity-70 text-lg">Estou aqui para a ouvir e apoiar na sua jornada de cura.</p>
              
              <div className="space-y-8 pt-8">
                <div className="flex items-center gap-6">
                  <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">📧</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#A67C52] font-bold">Email</p>
                    <p className="text-lg font-light">sandramaralopes61@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">💬</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#A67C52] font-bold">WhatsApp</p>
                    <p className="text-lg font-light">+351 912 987 538</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-widest text-[#A67C52] font-bold mb-4">Horário</p>
              <p className="font-light opacity-70">Segunda a Sexta: 09:00 — 19:00</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-3/5 p-16 bg-white">
            <form action="https://formsubmit.co/sandramaralopes61@gmail.com" method="POST" className="space-y-8">
              <input type="hidden" name="_subject" value="Novo contacto de Sandra Lopes Terapia" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]">Nome</label>
                  <input type="text" name="name" required className="w-full border-b border-[#1E293B]/10 py-3 focus:border-[#A67C52] outline-none transition-colors font-light" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]">Email</label>
                  <input type="email" name="email" required className="w-full border-b border-[#1E293B]/10 py-3 focus:border-[#A67C52] outline-none transition-colors font-light" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]">Mensagem</label>
                <textarea name="message" rows={4} required className="w-full border-b border-[#1E293B]/10 py-3 focus:border-[#A67C52] outline-none transition-colors font-light resize-none" placeholder="Como posso ajudar?"></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-[#1E293B] text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#A67C52] transition-all shadow-xl shadow-[#1E293B]/10">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
