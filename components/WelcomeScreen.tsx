
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
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img src={HERO_PHOTOS[0]} alt="Dr. Carla Benovit" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#faf9f6]"></div>
      </div>

      <div className="relative z-10 max-w-sm w-full py-8">
        {/* Profile Circle Compact */}
        <div className="mb-4 inline-block p-1 bg-white rounded-full shadow-xl border border-rose-100">
           <img src={HERO_PHOTOS[0]} alt="Profile" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-rose-800" />
        </div>
        
        <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-serif text-rose-950 leading-tight">Dra. {EXPERT_INFO.name}</h1>
            <p className="text-[9px] text-rose-800 font-black tracking-[0.2em] uppercase mt-1">{EXPERT_INFO.profession}</p>
        </div>
        
        <p className="text-sm text-gray-700 mb-8 italic px-4 leading-relaxed">
          "Sua beleza, sua essência, nosso cuidado."
        </p>

        <div className="space-y-3 px-2">
          <button 
            onClick={onStartQuiz}
            className="w-full py-4 bg-rose-600 text-white rounded-xl font-bold text-sm shadow-lg btn-glow active:scale-95 transition-all flex items-center justify-center gap-2 uppercase"
          >
            AVALIAÇÃO EXCLUSIVA
          </button>
          
          <button 
            onClick={handleWhatsAppDirect}
            className="w-full py-4 bg-emerald-500 text-white rounded-xl font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 uppercase"
          >
            WHATSAPP DIRETO
          </button>
          
          <button 
            onClick={onDirectSite}
            className="w-full py-2.5 text-rose-900 border border-rose-200 bg-white/50 rounded-xl font-bold text-[10px] active:scale-95 transition-all uppercase tracking-widest"
          >
            ENTRAR NO SITE
          </button>
        </div>
        
        <div className="mt-8 text-[8px] text-gray-400 font-bold uppercase tracking-widest">
            📍 {EXPERT_INFO.location}
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
