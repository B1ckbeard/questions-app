import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.css";

const FiltersSkeleton = () => {
  return (
    <div className={styles.filters}>
      <Wrapper>
        <div className={styles.filtersList}>
          <div className={styles.search}></div>
          {[...Array(4)].map((_, index) => (
            <div key={index} className={styles.category}>
              <div className={styles.categoryTitle}></div>
              <div className={styles.categoryList}>
                {[...Array(5)].map((_, itemIndex) => (
                  <div key={itemIndex} className={styles.categoryItem}></div>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.button}></div>
        </div>
      </Wrapper>
    </div>
  );
};

export default FiltersSkeleton;
