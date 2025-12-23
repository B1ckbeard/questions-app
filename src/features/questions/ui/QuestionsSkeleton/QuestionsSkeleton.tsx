import { memo, useMemo } from "react";
import styles from "./styles.module.css";
import Wrapper from "@/shared/ui/Wrapper/Wrapper";

interface Props {
  count?: number;
}

const QuestionsSkeleton = memo(({ count = 10 }: Props) => {
  const cards = useMemo(() => [...Array(count)], [count]);
  return (
    <Wrapper>
      <div className={styles.questionsList}>
        <div className={styles.questionsHeader}>
          <div className={`${styles.title} ${styles.skeleton}`}></div>
        </div>
        {cards.map((_, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles.skeleton}`}
          ></div>
        ))}
      </div>
    </Wrapper>
  );
});

export default QuestionsSkeleton;
