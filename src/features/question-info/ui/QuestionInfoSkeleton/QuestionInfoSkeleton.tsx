import { memo } from "react";
import styles from "./styles.module.css";
import { Wrapper } from "@/shared/ui";

interface Props {
  categoriesCount?: number;
  itemsPerCategory?: number;
}

const QuestionInfoSkeleton = memo(
  ({ categoriesCount = 3, itemsPerCategory = 2 }: Props) => {
    return (
      <div className={styles.filters}>
        <Wrapper>
          <div className={styles.filtersList}>
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
          </div>
        </Wrapper>
      </div>
    );
  }
);

export default QuestionInfoSkeleton;
