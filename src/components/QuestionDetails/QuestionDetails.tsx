import { Question } from "@/shared/interfaces";
import styles from "./styles.module.css";
import Wrapper from "../Wrapper/Wrapper";
// import BackLink from "../BackLink/BackLink";

interface Props {
  question: Question;
}

const QuestionDetails = ({ question }: Props) => {
  return (
    <div className={styles.details}>
      {/* <BackLink /> */}
      <Wrapper>
        <p className={styles.questionTitle}>{question.title}</p>
        <p className={styles.description}>{question.description}</p>
      </Wrapper>
      <Wrapper>
        <p className={styles.answerTitle}>Краткий ответ</p>
        <p className={styles.description}>{question.shortAnswer}</p>
      </Wrapper>
      <Wrapper>
        <p className={styles.answerTitle}>Полный ответ</p>
        <p className={styles.description}>{question.longAnswer}</p>
      </Wrapper>
    </div>
  );
};

export default QuestionDetails;
