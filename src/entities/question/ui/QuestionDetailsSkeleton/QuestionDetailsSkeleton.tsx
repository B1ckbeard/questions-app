import { memo } from "react";
import styles from "./styles.module.css";
import { Wrapper } from "@/shared/ui";

const QuestionDetailsSkeleton = memo(() => {
  return (
    <div className={styles.details}>
      <Wrapper>
        <div className={`${styles.questionTitle} ${styles.skeleton}`}></div>
        <div
          className={`${styles.questionDescription} ${styles.skeleton}`}
        ></div>
      </Wrapper>
      <Wrapper>
        <div className={`${styles.answerTitle} ${styles.skeleton}`}></div>
        <div
          className={`${styles.shortAnswerDescriprion} ${styles.skeleton}`}
        ></div>
      </Wrapper>
      <Wrapper>
        <div className={`${styles.answerTitle} ${styles.skeleton}`}></div>
        <div className={`${styles.answerDescriprion} ${styles.skeleton}`}></div>
      </Wrapper>
    </div>
  );
});

export default QuestionDetailsSkeleton;
