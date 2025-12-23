import { memo } from "react";
import styles from "./styles.module.css";
import Wrapper from "@/shared/ui/Wrapper/Wrapper";

interface Props {
  categoriesCount?: number;
  itemsPerCategory?: number;
}

const FiltersSkeleton = memo(
  ({ categoriesCount = 4, itemsPerCategory = 5 }: Props) => {
    return (
      <div className={styles.filters}>
        <Wrapper>
          <div className={styles.filtersList}>
            <div className={`${styles.search} ${styles.skeleton}`}></div>
            {Array.from({ length: categoriesCount }).map((_, index) => (
              <div key={index} className={styles.category}>
                <div
                  className={`${styles.categoryTitle} ${styles.skeleton}`}
                ></div>
                <div className={styles.categoryList}>
                  {Array.from({ length: itemsPerCategory }).map(
                    (_, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`${styles.categoryItem} ${styles.skeleton}`}
                      ></div>
                    )
                  )}
                </div>
              </div>
            ))}
            <div className={`${styles.button} ${styles.skeleton}`}></div>
          </div>
        </Wrapper>
      </div>
    );
  }
);

export default FiltersSkeleton;
