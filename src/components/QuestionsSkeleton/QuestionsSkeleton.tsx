import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.css";

interface Props {
  count?: number;
}

const QuestionsSkeleton = ({ count = 10 }: Props) => {
  return (
    <Wrapper>
      <div className={styles.questionsList}>
        <div className={styles.questionsHeader}>
          <div className={styles.title}></div>
        </div>
        {[...Array(count)].map((_, index) => (
          <div key={index} className={styles.card}></div>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionsSkeleton;
