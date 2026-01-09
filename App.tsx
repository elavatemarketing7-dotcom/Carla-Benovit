
import React, { useState, useEffect } from 'react';
import { AppState, QuizAnswer } from './types';
import { EXPERT_INFO, HERO_PHOTOS } from './constants';
import WelcomeScreen from './components/WelcomeScreen';
import QuizContainer from './components/QuizContainer';
import ResultPage from './components/ResultPage';
import MainSite from './components/MainSite';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>(AppState.WELCOME);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleStartQuiz = () => setView(AppState.QUIZ);
  const handleDirectToSite = () => setView(AppState.SITE);
  
  const handleQuizFinish = (userAnswers: QuizAnswer[]) => {
    setAnswers(userAnswers);
    setView(AppState.ANALYZING);
    // Simulate analyzing bar
    setTimeout(() => {
      setView(AppState.RESULT);
    }, 2500);
  };

  const handleGoToSiteFromDetails = () => setView(AppState.SITE);

  return (
    <div className="min-h-screen transition-all duration-500 overflow-x-hidden">
      {view === AppState.WELCOME && (
        <WelcomeScreen 
          onStartQuiz={handleStartQuiz} 
          onDirectSite={handleDirectToSite} 
        />
      )}

      {view === AppState.QUIZ && (
        <QuizContainer 
          onFinish={handleQuizFinish} 
          onCancel={() => setView(AppState.WELCOME)}
        />
      )}

      {view === AppState.ANALYZING && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md px-6">
          <div className="relative w-24 h-24 mb-6">
             <img src={HERO_PHOTOS[0]} alt={EXPERT_INFO.name} className="w-full h-full object-cover rounded-full border-2 border-rose-600 shadow-xl" />
             <div className="absolute inset-0 border-4 border-rose-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h2 className="text-xl font-serif text-rose-800 animate-pulse mb-8">Analisando suas respostas...</h2>
          <div className="w-full max-w-xs bg-gray-200 h-2 rounded-full overflow-hidden">
             <div className="bg-rose-600 h-full animate-[loading_2.5s_ease-in-out]"></div>
          </div>
          <style>{`
            @keyframes loading {
              0% { width: 0%; }
              100% { width: 100%; }
            }
          `}</style>
        </div>
      )}

      {view === AppState.RESULT && (
        <ResultPage 
          onContinue={handleGoToSiteFromDetails} 
          answers={answers}
        />
      )}

      {view === AppState.SITE && (
        <MainSite />
      )}
    </div>
  );
};

export default App;
