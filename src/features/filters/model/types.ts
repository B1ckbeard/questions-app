import { Skill } from "@/entities/skill/model/types";
import { Specialization } from "@/entities/specialization/model/types";

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
