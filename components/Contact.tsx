
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contacto em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#4A3F35] text-white rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
          {/* Contact Details */}
          <div className="md:w-1/3 p-12 bg-[#3E352C] flex flex-col justify-between">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif">Vamos conversar?</h2>
              <p className="font-light opacity-80">Estou aqui para a ouvir e apoiar.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-bold">Consultório Presencial</p>
                    <p className="text-sm opacity-70">Avenida da Liberdade, Lisboa, Portugal</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-sm opacity-70">geral@essenciaeequilibrio.pt</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-xl">📱</span>
                  <div>
                    <p className="font-bold">WhatsApp</p>
                    <p className="text-sm opacity-70">+351 912 345 678</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors" title="Instagram">
                <span className="text-[10px] font-bold">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors" title="Facebook">
                <span className="text-[10px] font-bold">FB</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A373] cursor-pointer transition-colors" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-2/3 p-12 bg-white text-[#4A3F35]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Nome Completo</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#FDFBF7] border-b border-[#F2E8DF] py-3 px-4 focus:outline-none focus:border-[#D4A373] transition-colors"
                    placeholder="Como se chama?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">E-mail</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#FDFBF7] border-b border-[#F2E8DF] py-3 px-4 focus:outline-none focus:border-[#D4A373] transition-colors"
                    placeholder="email@exemplo.pt"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Como posso ajudar?</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#FDFBF7] border-b border-[#F2E8DF] py-3 px-4 focus:outline-none focus:border-[#D4A373] transition-colors resize-none"
                  placeholder="Conte-me um pouco sobre o que a traz aqui..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-[#4A3F35] text-white font-bold uppercase tracking-widest rounded-xl hover:bg-[#6D4C41] shadow-lg transition-all"
              >
                Enviar Mensagem
              </button>
              <p className="text-center text-[10px] opacity-40 uppercase tracking-widest">A sua privacidade é a nossa prioridade.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
