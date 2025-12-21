import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.css";

const QuestionDetailsSkeleton = () => {
  return (
    <div className={styles.details}>
      <Wrapper>
        <div className={styles.questionTitle}></div>
        <div className={styles.questionDescription}></div>
      </Wrapper>
      <Wrapper>
        <div className={styles.answerTitle}></div>
        <div className={styles.shortAnswerDescriprion}></div>
      </Wrapper>
      <Wrapper>
        <div className={styles.answerTitle}></div>
        <div className={styles.answerDescriprion}></div>
      </Wrapper>
    </div>
  );
};

export default QuestionDetailsSkeleton;
