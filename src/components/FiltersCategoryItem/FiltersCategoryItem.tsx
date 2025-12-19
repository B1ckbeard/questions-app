import { FilterItem } from "@/shared/interfaces";
import styles from "./styles.module.css";

interface Props {
  isSelected: boolean;
  item: FilterItem;
  title: string;
  onClick: (item: FilterItem) => void;
}

const FiltersCategoryItem = ({ isSelected, item, title, onClick }: Props) => {
  return (
    <span
      className={`${styles.categoryItem} ${
        isSelected ? styles.selected : ""
      }`}
      onClick={() => onClick(item)}
    >
      {title}
    </span>
  );
};

export default FiltersCategoryItem;
