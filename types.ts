
export enum AppState {
  WELCOME = 'WELCOME',
  QUIZ = 'QUIZ',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
  SITE = 'SITE'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface QuizAnswer {
  questionId: number;
  answer: string;
}
