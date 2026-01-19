import { FiltersCategoryItemProps } from "@/features/questions-filters/model/types";
import styles from "./styles.module.css";
import { memo } from "react";

const CategoryItem = memo(
  ({ isSelected, item, title, onClick }: FiltersCategoryItemProps) => {
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
  }
);

export default CategoryItem;
