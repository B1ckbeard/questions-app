import { Question } from "@/shared/interfaces";
import styles from "./styles.module.css";
import BackButton from "../BackButton/BackButton";

interface Props {
  question: Question;
}

const QuestionDetails = ({ question }: Props) => {
  return (
    <div className={styles.details}>
      <BackButton />
      <div className={styles.wrapper}>
        <p className={styles.questionTitle}>{question.title}</p>
        <p className={styles.description}>{question.description}</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.answerTitle}>Краткий ответ</p>
        <p className={styles.description}>{question.shortAnswer}</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.answerTitle}>Полный ответ</p>
        <p className={styles.description}>{question.longAnswer}</p>
      </div>
    </div>
  );
};

export default QuestionDetails;
