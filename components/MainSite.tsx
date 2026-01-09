
import React, { useState } from 'react';
import { EXPERT_INFO, HERO_PHOTOS, INTRO_VIDEO, GALLERY_IMAGES, HARMONY_BADGES, TESTIMONIAL_IMAGES } from '../constants';

const MainSite: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openGallery = (img: string) => setSelectedImage(img);
  const closeGallery = () => setSelectedImage(null);

  const ctaClick = () => {
    window.open(EXPERT_INFO.whatsapp, '_blank');
  };

  return (
    <div className="bg-[#faf9f6]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center pt-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-rose-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mr-20 -mt-20"></div>
        
        <div className="relative z-10 text-center mb-12">
          <p className="text-rose-800 font-bold text-[10px] tracking-[0.3em] uppercase mb-4">Especialista em Naturalidade</p>
          <h1 className="text-4xl md:text-6xl font-serif text-rose-950 mb-4 leading-tight">
            Eu sou Carla Benovit.
          </h1>
          <p className="text-lg md:text-xl text-rose-900/80 font-light leading-relaxed max-w-lg mx-auto italic">
            Transformo faces preservando a essência, entregando segurança e resultados que elevam sua autoestima sem exageros.
          </p>
        </div>

        <div className="relative z-10 w-full max-w-md mx-auto mb-10 group">
          <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]">
            <img src={HERO_PHOTOS[0]} alt="Dra Carla Benovit" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 bg-rose-900 text-white p-5 rounded-3xl shadow-2xl animate-pulse">
            <span className="block text-[10px] font-bold uppercase tracking-wider mb-1">Agenda Aberta</span>
            <span className="text-sm font-serif">Últimas vagas</span>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
            <button 
                onClick={ctaClick}
                className="w-full py-5 bg-rose-600 text-white rounded-2xl font-bold text-lg shadow-xl btn-glow transition-all active:scale-95 mb-3"
            >
                AGENDAR CONSULTA GRATUITA
            </button>
        </div>
      </section>

      {/* 2. VIDEO INTRO */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video flex items-center justify-center bg-rose-50">
              <video 
                src={INTRO_VIDEO} 
                controls 
                loop
                muted
                autoPlay
                playsInline
                className="w-full h-full object-cover scale-[1.01]"
                poster={HERO_PHOTOS[1]}
              ></video>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-serif text-rose-950 mb-6 leading-tight">Sinta a Diferença</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. Resultados naturais e transformadores. Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única e merece atenção especial.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-700">✨</div>
              <p className="text-sm font-semibold text-rose-900 uppercase tracking-tight">Técnica Exclusiva Carla Benovit</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUEM SOU EU */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2 relative">
             <div className="absolute inset-0 border-2 border-rose-100 rounded-[3rem] translate-x-4 translate-y-4 -z-10"></div>
             <img src={HERO_PHOTOS[2]} alt="Dra Carla" className="w-full rounded-[3rem] shadow-xl" />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <p className="text-rose-700 font-bold text-[10px] tracking-widest uppercase mb-4">Minha História</p>
            <h2 className="text-4xl font-serif text-rose-950 mb-8 leading-tight">Muito além de preencher, é sobre rejuvenescer com respeito.</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Sempre acreditei que a estética facial deve servir para devolver a confiança, não para criar masks. Me especializei em Harmonização Facial em Palotina/PR buscando o equilíbrio perfeito entre ciência e arte.
            </p>
            <ul className="space-y-4">
                {["Avaliação diagnóstica profunda", "Produtos de alta performance", "Foco total na naturalidade", "Acompanhamento personalizado"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-rose-900 font-medium">
                        <span className="text-rose-500">✔</span> {item}
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. RESULTADOS REAIS + HARMONIZAÇÃO DE 💚 */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-rose-800 font-bold text-[10px] tracking-widest uppercase mb-4">Prova Visual</p>
          <h2 className="text-4xl font-serif text-rose-950 mb-4">Transformações Reais</h2>
          <p className="text-gray-500 max-w-lg mx-auto italic">Nossos procedimentos buscam harmonizar sem alterar quem você realmente é.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {GALLERY_IMAGES.map((img, i) => (
            <div 
              key={i} 
              onClick={() => openGallery(img)}
              className="group relative cursor-zoom-in rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
                <img src={img} alt={`Resultado ${i}`} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-rose-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">Ver Detalhes</span>
                </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest mt-8 mb-20">Resultados podem variar de pessoa para pessoa. Cada face é única.</p>

        {/* Harmonização de 💚 Moved here */}
        <div className="max-w-6xl mx-auto mt-24">
            <h3 className="text-center text-2xl font-serif mb-10 text-rose-900">Harmonização de 💚</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                 {HARMONY_BADGES.map((img, i) => (
                     <div 
                        key={i} 
                        className="rounded-2xl overflow-hidden shadow-sm border border-rose-50 bg-white p-2 cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => openGallery(img)}
                     >
                        <img src={img} alt="Badge" className="w-full h-full object-cover rounded-xl" />
                     </div>
                 ))}
            </div>
        </div>
      </section>

      {/* 5. POR QUE CONFIAR */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Avaliação Honesta", desc: "Só indico o que realmente trará benefícios visíveis e seguros." },
                { title: "Método Exclusivo", desc: "Protocolos personalizados criados por mim para cada tipo de face." },
                { title: "Segurança Total", desc: "Uso exclusivo de materiais certificados e técnicas avançadas." }
            ].map((card, i) => (
                <div key={i} className="p-10 bg-white rounded-[2.5rem] shadow-xl border border-rose-50 text-center hover:bg-rose-900 hover:text-white transition-all duration-300 group">
                    <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-rose-700 group-hover:bg-rose-800 group-hover:text-rose-100">
                        {i === 0 ? "✨" : i === 1 ? "💎" : "🛡️"}
                    </div>
                    <h3 className="text-xl font-serif mb-4">{card.title}</h3>
                    <p className="text-sm opacity-80 leading-relaxed">{card.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 6. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6 bg-rose-950 text-white text-center rounded-[4rem] mx-6 shadow-3xl">
         <h2 className="text-3xl font-serif mb-8 max-w-md mx-auto">Pronta para redescobrir sua melhor versão?</h2>
         <button 
            onClick={ctaClick}
            className="px-10 py-5 bg-white text-rose-950 rounded-2xl font-bold text-lg shadow-2xl btn-glow active:scale-95 transition-all"
         >
            SABER MAIS NO WHATSAPP
         </button>
      </section>

      {/* 7. COMO FUNCIONA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-serif mb-16 text-rose-950">Seu Caminho Até Aqui</h2>
          <div className="space-y-12">
            {[
                { step: "01", title: "Contato Inicial", desc: "Tire suas dúvidas via WhatsApp e pré-agende sua consulta." },
                { step: "02", title: "Consulta Presencial", desc: "Uma análise profunda de seus traços e desejos em Palotina." },
                { step: "03", title: "Plano de Tratamento", desc: "Definimos juntas o cronograma ideal para seus objetivos." }
            ].map((step, i) => (
                <div key={i} className="flex gap-8 items-start">
                    <span className="text-5xl font-serif text-rose-100">{step.step}</span>
                    <div>
                        <h4 className="text-xl font-bold text-rose-950 mb-2">{step.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MAIS PROVAS (DEPOIMENTOS) */}
      <section className="py-24 px-6 bg-[#faf9f6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-serif mb-16 text-rose-950">Depoimentos de Gratidão</h2>
          <div className="flex overflow-x-auto gap-6 pb-12 no-scrollbar px-4">
             {TESTIMONIAL_IMAGES.map((img, i) => (
                 <div key={i} className="min-w-[280px] md:min-w-[400px] h-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-rose-50">
                    <img src={img} alt="Testemunho" className="w-full h-full object-contain" />
                 </div>
             ))}
          </div>
        </div>
      </section>

      {/* 9. MAPA E CONTATO FINAL */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
                <h2 className="text-4xl font-serif text-rose-950 mb-8">Onde nos Encontrar</h2>
                <div className="w-full h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white mb-8">
                    <iframe 
                        src={EXPERT_INFO.addressEmbed} 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                    ></iframe>
                </div>
                <p className="text-gray-600 font-medium italic">📍 {EXPERT_INFO.location} - Paraná</p>
            </div>

            <div className="bg-rose-50 p-12 rounded-[4rem] relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-4xl font-serif text-rose-950 mb-6">Pronta para o seu novo eu?</h3>
                    <p className="text-rose-900 mb-10 max-w-md mx-auto italic">Primeira consulta focada em entender sua face de forma única e exclusiva.</p>
                    <button 
                        onClick={ctaClick}
                        className="w-full max-w-sm py-5 bg-rose-600 text-white rounded-2xl font-bold text-lg shadow-xl btn-glow transition-all active:scale-95 flex items-center justify-center gap-3 mx-auto"
                    >
                        <span>CLIQUE AQUI PARA SABER MAIS</span>
                    </button>
                    <p className="mt-4 text-[10px] text-rose-900/50 uppercase tracking-[0.3em] font-bold">Reserva Prioritária via WhatsApp</p>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 bg-[#faf9f6] text-center border-t border-rose-50">
        <h4 className="font-signature text-4xl text-rose-800 mb-6">Dra. {EXPERT_INFO.name}</h4>
        <div className="space-y-2 mb-10 text-gray-500 text-sm">
            <p className="font-bold text-rose-950 tracking-wider uppercase text-xs">{EXPERT_INFO.profession}</p>
            <p>{EXPERT_INFO.location}</p>
        </div>
        <div className="flex justify-center gap-6 mb-10">
            <a href={EXPERT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-rose-700 font-bold hover:underline transition-all">Instagram</a>
            <a href={EXPERT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="text-rose-700 font-bold hover:underline transition-all">WhatsApp</a>
        </div>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">© 2024 • Desenvolvido com sofisticação</p>
      </footer>

      {/* Lightbox */}
      {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300" onClick={closeGallery}>
            <button className="absolute top-8 right-8 text-white text-4xl hover:scale-110 transition-transform">&times;</button>
            <img src={selectedImage} alt="Fullscreen" className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-lg" />
          </div>
      )}
    </div>
  );
};

export default MainSite;
