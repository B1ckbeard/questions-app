import { Skill } from "@/entities/skill";
import { Specialization } from "@/entities/specialization";

export interface Question {
  id: number;
  title: string;
  shortAnswer: string;
  longAnswer: string;
  rate: number;
  complexity: number;
  description: string;
  keywords: string[];
  questionSkills: Skill[];
  questionSpecializations: Specialization[];
}
