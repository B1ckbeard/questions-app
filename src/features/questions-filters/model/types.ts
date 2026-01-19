import { Skill } from "@/entities/skill";
import { Specialization } from "@/entities/specialization";

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

export interface FiltersCategoryItemProps {
  isSelected: boolean;
  item: FilterItem;
  title: string;
  onClick: (item: FilterItem) => void;
}

export interface FiltersSkeletonProps {
  categoriesCount?: number;
  itemsPerCategory?: number;
}
