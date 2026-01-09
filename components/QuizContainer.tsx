
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, EXPERT_INFO, HERO_PHOTOS } from '../constants.ts';
import { QuizAnswer } from '../types.ts';

interface QuizContainerProps {
  onFinish: (answers: QuizAnswer[]) => void;
  onCancel: () => void;
}

const QuizContainer: React.FC<QuizContainerProps> = ({ onFinish, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, { questionId: QUIZ_QUESTIONS[currentStep].id, answer }];
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md p-4 overflow-y-auto">
      {/* Quiz Background Context - Slightly more visible */}
      <div className="absolute inset-0 -z-10 opacity-10">
         <img src={HERO_PHOTOS[2]} alt="Context" className="w-full h-full object-cover grayscale" />
      </div>

      {/* Floating Hero Info */}
      <div className="flex flex-col items-center mb-4 scale-90">
        <div className="relative">
            <img 
                src={HERO_PHOTOS[0]} 
                alt={EXPERT_INFO.name} 
                className="w-16 h-16 rounded-full object-cover border-2 border-rose-600 shadow-xl"
            />
            <div className="absolute -bottom-0.5 -right-0.5 bg-rose-500 w-3.5 h-3.5 rounded-full border-2 border-white"></div>
        </div>
        <span className="mt-2 text-[10px] font-black text-rose-950 tracking-[0.25em] uppercase">DRA. {EXPERT_INFO.name.toUpperCase()}</span>
      </div>

      {/* Card */}
      <div className="w-full max-w-sm glass-effect p-6 sm:p-8 rounded-[2rem] shadow-2xl border border-white/50">
        <div className="mb-4 flex justify-between items-center text-[9px] font-black text-rose-800 tracking-widest uppercase opacity-70">
            <span>AVALIAÇÃO {currentStep + 1}/{QUIZ_QUESTIONS.length}</span>
            <span>{Math.round(progress)}%</span>
        </div>
        
        <div className="w-full bg-rose-100/50 h-1.5 rounded-full mb-6 overflow-hidden">
            <div 
                className="bg-rose-600 h-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(225,29,72,0.4)]"
                style={{ width: `${progress}%` }}
            ></div>
        </div>

        <h2 className="text-xl font-serif text-rose-950 mb-6 leading-snug text-center">
            {QUIZ_QUESTIONS[currentStep].question}
        </h2>

        <div className="grid grid-cols-1 gap-2">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className="w-full py-4 px-5 bg-white border border-rose-50 rounded-xl text-rose-950 font-bold text-sm text-left transition-all active:bg-rose-50 active:scale-[0.98] shadow-sm flex items-center justify-between group"
                >
                    <span className="leading-tight pr-3">{option}</span>
                    <span className="text-rose-300 group-active:text-rose-700">›</span>
                </button>
            ))}
        </div>
        
        <button 
          onClick={onCancel}
          className="mt-6 w-full text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] text-center"
        >
          ✕ Sair da Avaliação
        </button>
      </div>
    </div>
  );
};

export default QuizContainer;
