
import React from 'react';
import { EXPERT_INFO, HERO_PHOTOS } from '../constants.ts';
import { QuizAnswer } from '../types.ts';

interface ResultPageProps {
  onContinue: () => void;
  answers: QuizAnswer[];
}

const ResultPage: React.FC<ResultPageProps> = ({ onContinue, answers }) => {
  const handleSendToWhatsApp = () => {
    const message = `Olá Dra. Carla! Acabei de realizar o quiz no site. Minhas respostas:\n\n${answers.map(a => `- ${a.answer}`).join('\n')}\n\nGostaria de agendar uma consulta.`;
    window.open(`${EXPERT_INFO.whatsapp}&text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDirectWhatsApp = () => {
    window.open(EXPERT_INFO.whatsapp, '_blank');
  };

  return (
    <div className="h-screen w-screen bg-rose-950 flex flex-col items-center justify-center p-4 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-rose-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-24 -mt-24"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-24 -mb-24"></div>

      <div className="relative z-10 max-w-xs w-full text-center flex flex-col justify-center h-full max-h-[640px]">
        <div className="mb-2">
            <p className="text-rose-300 font-bold tracking-[0.2em] text-[8px] uppercase mb-1">Perfil Compatível</p>
            <h1 className="text-2xl font-serif leading-tight">Você é a Paciente ideal.</h1>
        </div>
        
        <div className="my-4 relative">
           <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden border-2 border-rose-800 shadow-2xl rotate-2 transform">
               <img src={HERO_PHOTOS[1]} alt="Dr Carla" className="w-full h-full object-cover" />
           </div>
           <div className="absolute -bottom-2 -right-0 bg-white text-rose-950 px-3 py-1.5 rounded-lg text-[9px] font-black shadow-xl">
               ✨ APROVADA
           </div>
        </div>

        <p className="text-rose-100 text-xs leading-snug mb-6 px-2">
          Com base nas suas respostas, o Método da <strong>Dra. {EXPERT_INFO.name}</strong> consegue entregar exatamente a naturalidade e segurança que você procura.
        </p>

        <div className="space-y-2 w-full">
          <button 
            onClick={handleSendToWhatsApp}
            className="w-full py-3.5 bg-white text-rose-950 rounded-xl font-black shadow-xl flex flex-col items-center justify-center active:scale-95 transition-all"
          >
            <span className="text-[11px] uppercase tracking-tight">1- ENVIAR MINHA AVALIAÇÃO A DRA.</span>
          </button>

          <button 
            onClick={handleDirectWhatsApp}
            className="w-full py-3.5 bg-rose-900/50 text-white border border-rose-800/50 rounded-xl font-bold text-[10px] active:scale-95 transition-all uppercase"
          >
            2- CHAMAR NO WHATSSAP SEM COMPROMISSO
          </button>

          <button 
            onClick={onContinue}
            className="w-full py-2.5 text-rose-300/60 font-black text-[9px] uppercase tracking-widest active:text-white transition-colors"
          >
            3- NÃO ENVIAR E CONTINUAR NO SITE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
