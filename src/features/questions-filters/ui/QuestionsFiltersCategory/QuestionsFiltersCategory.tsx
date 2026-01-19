import { memo, useCallback, useMemo, useState } from "react";
import styles from "./styles.module.css";
import { FilterConfig, FilterItem } from "../../model/types";
import { CategoryItem, LinkShowMore } from "@/shared/ui";

const QuestionsFiltersCategory = memo(
  <T extends FilterItem>({
    title,
    items,
    selectedItems,
    onToggle,
    limit = 5,
  }: FilterConfig<T>) => {
    const [isShow, setIsShow] = useState(false);

    const getItemValue = useCallback((item: T) => {
      return typeof item === "object" && item !== null
        ? item.title
        : String(item);
    }, []);

    const isSelected = useCallback(
      (item: T) => {
        const value = getItemValue(item);
        return selectedItems.some((selected) => {
          const selectedValue = getItemValue(selected as T);
          return selectedValue === value;
        });
      },
      [selectedItems, getItemValue]
    );

    const shouldShowToggle = items.length > limit;

    const handleToggleShow = useCallback(() => {
      setIsShow((prev) => !prev);
    }, []);

    const itemsToShow = useMemo(() => {
      return isShow ? items : items.slice(0, limit);
    }, [items, isShow, limit]);

    return (
      <div className={styles.category}>
        <p className={styles.categoryTitle}>{title}</p>
        <div className={styles.categoryList}>
          {itemsToShow.map((item, index) => (
            <CategoryItem
              key={index}
              isSelected={isSelected(item)}
              item={item}
              title={getItemValue(item)}
              onClick={() => onToggle(item)}
            />
          ))}
        </div>
        {shouldShowToggle && (
          <LinkShowMore onClick={handleToggleShow} isShow={isShow} />
        )}
      </div>
    );
  }
);

export default QuestionsFiltersCategory;
