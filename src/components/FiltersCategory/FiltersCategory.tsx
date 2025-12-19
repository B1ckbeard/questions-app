import { useState } from "react";
import styles from "./styles.module.css";
import { FilterConfig, FilterItem } from "@/shared/interfaces";
import LinkShowMore from "../LinkShowMore/LinkShowMore";
import FiltersCategoryItem from "../FiltersCategoryItem/FiltersCategoryItem";

const FiltersCategory = <T extends FilterItem>({
  title,
  items,
  selectedItems,
  onToggle,
  limit = 5,
}: FilterConfig<T>) => {
  const [isShow, setIsShow] = useState(false);

  const getItemValue = (item: T) =>
    typeof item === "object" && item !== null ? item.title : String(item);

  const isSelected = (item: T) => {
    const value = getItemValue(item);
    return selectedItems.some((selected) => {
      const selectedValue = getItemValue(selected as T);
      return selectedValue === value;
    });
  };

  const shouldShowToggle = items.length > limit;
  const itemsToShow = isShow ? items : items.slice(0, limit);

  return (
    <div className={styles.category}>
      <p className={styles.categoryTitle}>{title}</p>
      <div className={styles.categoryList}>
        {itemsToShow.map((item, index) => (
          <FiltersCategoryItem
            key={index}
            isSelected={isSelected(item)}
            item={item}
            title={getItemValue(item)}
            onClick={() => onToggle(item)}
          />
        ))}
      </div>
      {shouldShowToggle && <LinkShowMore onClick={setIsShow} isShow={isShow} />}
    </div>
  );
};

export default FiltersCategory;
