
import React, { useState } from 'react';
import { EXPERT_INFO, HERO_PHOTOS, INTRO_VIDEO, GALLERY_IMAGES, HARMONY_BADGES, TESTIMONIAL_IMAGES } from '../constants.ts';

const MainSite: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openGallery = (img: string) => setSelectedImage(img);
  const closeGallery = () => setSelectedImage(null);

  const ctaClick = () => {
    window.open(EXPERT_INFO.whatsapp, '_blank');
  };

  const navLinks = [
    { name: 'Sobre Mim', href: '#sobre-mim' },
    { name: 'Prova Visual', href: '#prova-visual' },
    { name: 'Harmonização de 💚', href: '#harmonizacao' },
    { name: 'Onde Encontrar', href: '#localizacao' },
    { name: 'Contato Direto', href: EXPERT_INFO.whatsapp, isExternal: true }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 60;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper para renderizar os links do marquee
  const renderLinks = () => (
    <>
      {navLinks.map((link, idx) => (
        <a 
          key={`${link.name}-${idx}`} 
          href={link.href}
          target={link.isExternal ? "_blank" : undefined}
          rel={link.isExternal ? "noopener noreferrer" : undefined}
          onClick={(e) => !link.isExternal && handleNavClick(e, link.href)}
          className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-colors whitespace-nowrap py-1 px-4 ${
            link.isExternal 
            ? 'text-emerald-600 hover:text-emerald-500' 
            : 'text-rose-900/60 hover:text-rose-900'
          }`}
        >
          {link.name}
        </a>
      ))}
      <span className="text-rose-200 px-2">•</span>
    </>
  );

  return (
    <div className="bg-[#faf9f6]">
      {/* NAVEGAÇÃO COM EFEITO LOGRADOURO PASSANDO DEVAGAR */}
      <nav className="fixed top-0 left-0 right-0 z-[40] glass-effect border-b border-rose-100/50 shadow-sm overflow-hidden">
        <div className="max-w-6xl mx-auto flex items-center h-12 md:h-14">
          {/* Logo Estática à Esquerda */}
          <div className="pl-4 pr-6 bg-white/50 h-full flex items-center z-50 border-r border-rose-50 shadow-[5px_0_15px_rgba(0,0,0,0.02)]">
            <button 
              onClick={scrollToTop}
              className="font-signature text-lg md:text-xl text-rose-950 whitespace-nowrap hover:scale-105 transition-transform"
            >
              Dra. {EXPERT_INFO.name.split(' ')[0]}
            </button>
          </div>
          
          {/* Container do Marquee */}
          <div className="marquee-container flex-1">
            <div className="marquee-content">
              {renderLinks()}
              {renderLinks()}
              {renderLinks()}
              {renderLinks()}
            </div>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION COMPACTO */}
      <section id="inicio" className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col items-center pt-24 md:pt-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mr-20 -mt-20"></div>
        
        <div className="relative z-10 text-center mb-8 max-w-2xl">
          <p className="text-rose-800 font-bold text-[9px] tracking-[0.3em] uppercase mb-3">Especialista em Naturalidade</p>
          <h1 className="text-4xl md:text-6xl font-serif text-rose-950 mb-3 leading-tight">
            Dra. Carla Benovit.
          </h1>
          <p className="text-sm md:text-lg text-rose-900/80 font-light leading-relaxed max-w-lg mx-auto italic px-4">
            Preservando sua essência com resultados que elevam sua autoestima sem exageros.
          </p>
        </div>

        <div className="relative z-10 w-full max-w-[280px] md:max-w-xs mx-auto mb-8">
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-white">
            <img src={HERO_PHOTOS[0]} alt="Dra Carla Benovit" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-2 bg-rose-900 text-white py-2 px-4 rounded-2xl shadow-xl">
            <span className="block text-[8px] font-bold uppercase tracking-wider">Últimas vagas</span>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-xs flex flex-col items-center pb-8">
            <button 
                onClick={ctaClick}
                className="w-full py-4 bg-rose-600 text-white rounded-xl font-bold text-sm shadow-lg btn-glow transition-all active:scale-95"
            >
                AGENDAR CONSULTA AGORA
            </button>
        </div>
      </section>

      {/* 2. VIDEO INTRO */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-5/12">
            <div className="relative rounded-[2rem] overflow-hidden shadow-lg aspect-video flex items-center justify-center bg-rose-50 border-2 border-rose-50">
              <video 
                src={INTRO_VIDEO} 
                controls 
                loop
                muted
                autoPlay
                playsInline
                className="w-full h-full object-cover"
                poster={HERO_PHOTOS[1]}
              ></video>
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <h2 className="text-2xl font-serif text-rose-950 mb-4 leading-tight">Sinta a Diferença</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Descubra como a beleza pode ser realçada com técnica e propósito. Resultados naturais e seguros por quem entende que cada detalhe importa.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-lg">✨</span>
              <p className="text-[10px] font-bold text-rose-900 uppercase tracking-tight">Técnica Exclusiva Carla Benovit</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOBRE MIM */}
      <section id="sobre-mim" className="py-16 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 relative">
             <div className="absolute inset-0 border border-rose-100 rounded-[2.5rem] translate-x-3 translate-y-3 -z-10"></div>
             <img src={HERO_PHOTOS[2]} alt="Dra Carla" className="w-full rounded-[2.5rem] shadow-lg max-w-[320px] mx-auto md:max-w-none" />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <p className="text-rose-700 font-bold text-[9px] tracking-widest uppercase mb-3">Minha História</p>
            <h2 className="text-3xl font-serif text-rose-950 mb-6 leading-tight">Muito além de preencher, é sobre rejuvenescer.</h2>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                Me especializei em Harmonização Facial em Palotina/PR buscando o equilíbrio perfeito entre ciência e arte facial, focando sempre na naturalidade do seu rosto.
            </p>
            <ul className="grid grid-cols-1 gap-3">
                {["Avaliação diagnóstica profunda", "Produtos certificados", "Naturalidade em 1º lugar", "Acompanhamento VIP"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-rose-900 font-semibold text-xs">
                        <span className="text-rose-500">✔</span> {item}
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. PROVA VISUAL */}
      <section id="prova-visual" className="py-16 px-6 bg-white overflow-hidden scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-serif text-rose-950 mb-2">Transformações Reais</h2>
          <p className="text-xs text-gray-500 italic">Harmonizando sem alterar sua essência.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {GALLERY_IMAGES.slice(0, 8).map((img, i) => (
            <div 
              key={i} 
              onClick={() => openGallery(img)}
              className="group relative cursor-zoom-in rounded-2xl overflow-hidden shadow-sm aspect-square"
            >
                <img src={img} alt={`Resultado ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-rose-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
        
        {/* HARMONIZAÇÃO DE 💚 */}
        <div id="harmonizacao" className="max-w-5xl mx-auto mt-16 scroll-mt-24 border-t border-rose-50 pt-12">
            <h3 className="text-center text-xl font-serif mb-8 text-rose-900">Harmonização de 💚</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2">
                 {HARMONY_BADGES.map((img, i) => (
                     <div 
                        key={i} 
                        className="rounded-xl overflow-hidden border border-rose-50 bg-white p-1 hover:shadow-md transition-shadow"
                        onClick={() => openGallery(img)}
                     >
                        <img src={img} alt="Badge" className="w-full aspect-square object-cover rounded-lg" />
                     </div>
                 ))}
            </div>
        </div>
      </section>

      {/* 9. LOCALIZAÇÃO */}
      <section id="localizacao" className="py-16 px-6 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-serif text-rose-950 mb-6">Onde nos Encontrar</h2>
            <div className="w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-lg border border-rose-50 mb-4">
                <iframe 
                    src={EXPERT_INFO.addressEmbed} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                ></iframe>
            </div>
            <p className="text-xs text-gray-500 font-medium mb-12">📍 {EXPERT_INFO.location} - Paraná</p>

            <div className="bg-rose-50 p-8 rounded-[2.5rem] max-w-2xl mx-auto">
                <h3 className="text-2xl font-serif text-rose-950 mb-3">Sua consulta exclusiva</h3>
                <p className="text-rose-900 text-xs mb-6 italic">Análise facial profunda em ambiente acolhedor e seguro.</p>
                <button 
                    onClick={ctaClick}
                    className="w-full max-w-xs py-4 bg-rose-600 text-white rounded-xl font-bold text-sm shadow-lg transition-all active:scale-95 mx-auto"
                >
                    SABER MAIS VIA WHATSAPP
                </button>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 bg-[#faf9f6] text-center border-t border-rose-50">
        <h4 className="font-signature text-3xl text-rose-800 mb-4">Dra. {EXPERT_INFO.name}</h4>
        <div className="flex justify-center gap-6 text-[10px] uppercase font-bold tracking-widest text-rose-900/60">
            <a href={EXPERT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-rose-900 transition-colors">Instagram</a>
            <a href={EXPERT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-rose-900 transition-colors">WhatsApp</a>
        </div>
        <p className="text-[8px] text-gray-400 mt-8 uppercase tracking-[0.2em]">© 2024 • Luxo & Naturalidade</p>
      </footer>

      {/* Lightbox */}
      {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={closeGallery}>
            <img src={selectedImage} alt="Fullscreen" className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg" />
          </div>
      )}
    </div>
  );
};

export default MainSite;
