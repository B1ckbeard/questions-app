import { FilterItem } from "../../model/types";
import styles from "./styles.module.css";
import { memo } from "react";

interface Props {
  isSelected: boolean;
  item: FilterItem;
  title: string;
  onClick: (item: FilterItem) => void;
}

const FiltersCategoryItem = memo(
  ({ isSelected, item, title, onClick }: Props) => {
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

export default FiltersCategoryItem;
