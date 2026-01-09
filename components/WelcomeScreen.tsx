
import React from 'react';
import { EXPERT_INFO, HERO_PHOTOS } from '../constants';

interface WelcomeScreenProps {
  onStartQuiz: () => void;
  onDirectSite: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartQuiz, onDirectSite }) => {
  const handleWhatsAppDirect = () => {
    window.open(EXPERT_INFO.whatsapp, '_blank');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 bg-[#faf9f6] overflow-hidden">
      {/* Background Hero Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={HERO_PHOTOS[0]} alt="Dr. Carla Benovit" className="w-full h-full object-cover opacity-20 grayscale-[20%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf9f6]/70 to-[#faf9f6]"></div>
      </div>

      <div className="relative z-10 max-w-xs w-full">
        {/* Compact Profile Circle */}
        <div className="mb-4 inline-block p-1 bg-white rounded-full shadow-md scale-90">
           <img src={HERO_PHOTOS[0]} alt="Profile" className="w-20 h-20 rounded-full object-cover border-2 border-rose-800" />
        </div>
        
        <div className="mb-4">
            <h1 className="text-3xl font-serif text-rose-950 leading-tight">Dra. {EXPERT_INFO.name}</h1>
            <p className="text-[10px] text-rose-800 font-black tracking-[0.2em] uppercase mt-1">{EXPERT_INFO.profession}</p>
        </div>
        
        <p className="text-gray-600 mb-8 leading-snug italic px-2 text-sm">
          "Minha missão é revelar a sua melhor versão através de uma técnica sensível, segura e extremamente natural."
        </p>

        <div className="space-y-3 px-2">
          <button 
            onClick={onStartQuiz}
            className="w-full py-4 bg-rose-600 text-white rounded-xl font-black text-sm shadow-xl btn-glow transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-tight"
          >
            <span>✨</span> COMEÇAR AVALIAÇÃO EXCLUSIVA
          </button>
          
          <button 
            onClick={handleWhatsAppDirect}
            className="w-full py-3.5 bg-emerald-500 text-white rounded-xl font-bold text-sm shadow-lg hover:bg-emerald-600 transition-all active:scale-95 flex items-center justify-center gap-2 uppercase"
          >
            <span>💬</span> CHAMAR NO WHATSAPP AGORA
          </button>
          
          <button 
            onClick={onDirectSite}
            className="w-full py-3 text-rose-900 border border-rose-100 rounded-xl font-bold text-[11px] shadow-sm hover:bg-rose-50 transition-all active:scale-95 uppercase tracking-wider"
          >
            CONHECER O SITE
          </button>
        </div>
        
        <div className="mt-6 flex items-center justify-center gap-4 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1 opacity-70">📍 {EXPERT_INFO.location}</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
