import styles from "./styles.module.css";
import Wrapper from "../Wrapper/Wrapper";

const QuestionInfoSkeleton = () => {
  return (
    <div className={styles.filters}>
      <Wrapper>
        <div className={styles.filtersList}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className={styles.category}>
              <div className={styles.categoryTitle}></div>
              <div className={styles.categoryList}>
                {[...Array(2)].map((_, itemIndex) => (
                  <div key={itemIndex} className={styles.categoryItem}></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default QuestionInfoSkeleton;
