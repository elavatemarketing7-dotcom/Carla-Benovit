
import React from 'react';
import { EXPERT_INFO, HERO_PHOTOS } from '../constants.ts';

interface WelcomeScreenProps {
  onStartQuiz: () => void;
  onDirectSite: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartQuiz, onDirectSite }) => {
  const handleWhatsAppDirect = () => {
    window.open(EXPERT_INFO.whatsapp, '_blank');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#faf9f6] overflow-hidden">
      {/* Background Hero Image with Better Visibility */}
      <div className="absolute inset-0 z-0">
        <img src={HERO_PHOTOS[0]} alt="Dr. Carla Benovit" className="w-full h-full object-cover opacity-30 grayscale-[10%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf9f6]/40 to-[#faf9f6]"></div>
      </div>

      <div className="relative z-10 max-w-sm w-full">
        {/* Prominent Profile Circle */}
        <div className="mb-6 inline-block p-1.5 bg-white rounded-full shadow-2xl scale-100 border border-rose-100">
           <img src={HERO_PHOTOS[0]} alt="Profile" className="w-28 h-28 rounded-full object-cover border-4 border-rose-800" />
        </div>
        
        <div className="mb-6">
            <h1 className="text-4xl font-serif text-rose-950 leading-tight">Dra. {EXPERT_INFO.name}</h1>
            <p className="text-xs text-rose-800 font-black tracking-[0.25em] uppercase mt-2">{EXPERT_INFO.profession}</p>
        </div>
        
        <p className="text-gray-700 mb-10 leading-relaxed italic px-4 text-base">
          "Minha missão é revelar a sua melhor versão através de uma técnica sensível, segura e extremamente natural."
        </p>

        <div className="space-y-4 px-2">
          <button 
            onClick={onStartQuiz}
            className="w-full py-5 bg-rose-600 text-white rounded-2xl font-black text-base shadow-2xl btn-glow transition-all active:scale-95 flex items-center justify-center gap-3 uppercase tracking-tight"
          >
            <span>✨</span> COMEÇAR AVALIAÇÃO EXCLUSIVA
          </button>
          
          <button 
            onClick={handleWhatsAppDirect}
            className="w-full py-4 bg-emerald-500 text-white rounded-2xl font-bold text-base shadow-xl hover:bg-emerald-600 transition-all active:scale-95 flex items-center justify-center gap-3 uppercase"
          >
            <span>💬</span> CHAMAR NO WHATSAPP AGORA
          </button>
          
          <button 
            onClick={onDirectSite}
            className="w-full py-3 text-rose-900 border border-rose-200 bg-white/50 rounded-2xl font-bold text-xs shadow-sm hover:bg-white transition-all active:scale-95 uppercase tracking-widest"
          >
            CONHECER O SITE COMPLETO
          </button>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1.5 opacity-80">📍 {EXPERT_INFO.location}</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
