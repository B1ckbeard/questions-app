export interface QuestionSkill {
  id: number;
  title: string;
  description: string;
}

export interface Question {
  id: number;
  title: string;
  shortAnswer: string;
  longAnswer: string;
  rate: number;
  complexity: number;
  description: string;
  keywords: string[];
  questionSkills: QuestionSkill[];
}
