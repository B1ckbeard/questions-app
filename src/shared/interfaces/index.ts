export interface Skill {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  specializations?: Specialization[];
}

export interface Specialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
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
  questionSkills: Skill[];
  questionSpecializations: Specialization[];
}

export interface SelectedFilters {
  skills: Skill[];
  complexities: string[];
  ratings: number[];
  search: string;
}

export type FilterItem = Skill | Specialization | string | number;

export interface FilterConfig<T extends FilterItem> {
  title: string;
  items: T[];
  selectedItems: T[];
  onToggle: (item: T) => void;
  limit?: number;
}
