import { FiltersCategoryItemProps } from "@/features/questions-filters/model/types";
import styles from "./styles.module.css";

const CategoryItem = ({
  isSelected,
  item,
  title,
  onClick,
}: FiltersCategoryItemProps) => {
  return (
    <span
      className={`${styles.categoryItem} ${isSelected ? styles.selected : ""}`}
      onClick={() => onClick(item)}
    >
      {title}
    </span>
  );
};

export default CategoryItem;
