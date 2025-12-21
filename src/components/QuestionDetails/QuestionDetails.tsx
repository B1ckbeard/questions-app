import { Question } from "@/shared/interfaces";
import styles from "./styles.module.css";
import Wrapper from "../Wrapper/Wrapper";
import QuestionHtml from "../QuestionHtml/QuestionHtml";

interface Props {
  question: Question;
}

const QuestionDetails = ({ question }: Props) => {
  return (
    <div className={styles.details}>
      <Wrapper>
        <p className={`${styles.text} ${styles.questionTitle}`}>
          {question.title}
        </p>
        <p className={`${styles.text} ${styles.description}`}>
          {question.description}
        </p>
      </Wrapper>
      <Wrapper>
        <p className={`${styles.text} ${styles.answerTitle}`}>Краткий ответ</p>
        <QuestionHtml answer={question.shortAnswer} />
      </Wrapper>
      <Wrapper>
        <p className={`${styles.text} ${styles.answerTitle}`}>Полный ответ</p>
        <QuestionHtml answer={question.longAnswer} />
      </Wrapper>
    </div>
  );
};

export default QuestionDetails;
