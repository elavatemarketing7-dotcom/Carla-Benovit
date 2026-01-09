
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, EXPERT_INFO, HERO_PHOTOS } from '../constants';
import { QuizAnswer } from '../types';

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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm p-4 overflow-y-auto">
      {/* Quiz Background Context */}
      <div className="absolute inset-0 -z-10 opacity-5">
         <img src={HERO_PHOTOS[2]} alt="Context" className="w-full h-full object-cover grayscale" />
      </div>

      {/* Floating Hero Info - Very Compact */}
      <div className="flex flex-col items-center mb-2 scale-75 origin-bottom">
        <div className="relative">
            <img 
                src={HERO_PHOTOS[0]} 
                alt={EXPERT_INFO.name} 
                className="w-12 h-12 rounded-full object-cover border-2 border-rose-600 shadow-md"
            />
            <div className="absolute -bottom-0.5 -right-0.5 bg-rose-500 w-2.5 h-2.5 rounded-full border-2 border-white"></div>
        </div>
        <span className="mt-1 text-[9px] font-black text-rose-950 tracking-[0.2em]">DRA. {EXPERT_INFO.name.toUpperCase()}</span>
      </div>

      {/* Ultra Compact Card */}
      <div className="w-full max-w-sm glass-effect p-4 sm:p-5 rounded-[1.5rem] shadow-2xl border border-rose-100/30">
        <div className="mb-3 flex justify-between items-center text-[8px] font-black text-rose-800 tracking-tighter uppercase opacity-60">
            <span>AVALIAÇÃO {currentStep + 1}/{QUIZ_QUESTIONS.length}</span>
            <span>{Math.round(progress)}%</span>
        </div>
        
        <div className="w-full bg-rose-50 h-1 rounded-full mb-4 overflow-hidden">
            <div 
                className="bg-rose-600 h-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>

        <h2 className="text-lg font-serif text-rose-950 mb-4 leading-tight text-center px-1">
            {QUIZ_QUESTIONS[currentStep].question}
        </h2>

        <div className="grid grid-cols-1 gap-1.5">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className="w-full py-2.5 px-4 bg-white/90 border border-rose-50 rounded-lg text-rose-950 font-bold text-xs text-left transition-all active:bg-rose-100 active:scale-[0.97] shadow-sm flex items-center justify-between group"
                >
                    <span className="leading-tight pr-2">{option}</span>
                    <span className="text-rose-400 group-active:text-rose-700">›</span>
                </button>
            ))}
        </div>
        
        <button 
          onClick={onCancel}
          className="mt-4 w-full text-[9px] text-gray-400 font-bold uppercase tracking-widest text-center"
        >
          ✕ Sair
        </button>
      </div>
    </div>
  );
};

export default QuizContainer;
