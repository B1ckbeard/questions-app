import { memo } from "react";
import styles from "./styles.module.css";
import { FiltersSkeletonProps } from "../../model/types";

const QuestionsFiltersSkeleton = memo(
  ({ categoriesCount = 4, itemsPerCategory = 5 }: FiltersSkeletonProps) => {
    return (
      <div className={styles.filtersList}>
        <div className={`${styles.search} ${styles.skeleton}`}></div>
        {Array.from({ length: categoriesCount }).map((_, index) => (
          <div key={index} className={styles.category}>
            <div className={`${styles.categoryTitle} ${styles.skeleton}`}></div>
            <div className={styles.categoryList}>
              {Array.from({ length: itemsPerCategory }).map((_, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`${styles.categoryItem} ${styles.skeleton}`}
                ></div>
              ))}
            </div>
          </div>
        ))}
        <div className={`${styles.button} ${styles.skeleton}`}></div>
      </div>
    );
  }
);

export default QuestionsFiltersSkeleton;
