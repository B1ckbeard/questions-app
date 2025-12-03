import { Question } from "@/shared/interfaces";
import styles from "./styles.module.css";
import QuestionItem from "../QuestionItem/QuestionItem";

interface Props {
  questions: Question[];
}

const QuestionsList = ({ questions }: Props) => {
  return (
    <div className={styles.questionsList}>
      <div className={styles.questionsTitle}>
        <h1 className={styles.title}>Вопросы</h1>
      </div>
      {questions?.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </div>
  );
};

export default QuestionsList;
