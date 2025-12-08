import { useState } from "react";
import styles from "./styles.module.css";

interface Item {
  title: string;
}

interface Props<T> {
  title: string;
  items: T[];
  selectedItems: T[];
  onToggle: (item: T) => void;
  getItemValue?: (item: T) => string | number;
  getItemLabel?: (item: T) => string;
  limit?: number;
}

const FiltersCategory = <T extends Item | string | number>({
  title,
  items,
  selectedItems,
  getItemValue = (item: T) =>
    typeof item === "object" && item !== null
      ? (item as Item).title
      : String(item),
  getItemLabel = (item: T) =>
    typeof item === "object" && item !== null
      ? (item as Item).title
      : String(item),
  onToggle,
  limit = 5,
}: Props<T>) => {
  const [showAll, setShowAll] = useState(false);

  const isSelected = (item: T) => {
    const value = getItemValue(item);
    return selectedItems.some((selected) => {
      const selectedValue = getItemValue(selected as T);
      return selectedValue === value;
    });
  };

  const shouldShowToggle = items.length > limit;
  const itemsToShow = showAll ? items : items.slice(0, limit);

  return (
    <div className={styles.category}>
      <p className={styles.categoryTitle}>{title}</p>
      <div className={styles.categoryList}>
        {itemsToShow.map((item, index) => {
          const selected = isSelected(item);
          return (
            <span
              key={index}
              className={`${styles.categoryButton} ${
                selected ? styles.selected : ""
              }`}
              onClick={() => onToggle(item)}
            >
              {getItemLabel(item)}
            </span>
          );
        })}
      </div>
      {shouldShowToggle && (
        <a
          className={styles.showMoreButton}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Скрыть" : "Посмотреть все"}
        </a>
      )}
    </div>
  );
};

export default FiltersCategory;
