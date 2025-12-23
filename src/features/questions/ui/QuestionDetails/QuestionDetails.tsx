import styles from "./styles.module.css";
import { memo } from "react";
import QuestionHtml from "@/shared/ui/QuestionHtml/QuestionHtml";
import { Question } from "@/entities/question/model/types";
import Wrapper from "@/shared/ui/Wrapper/Wrapper";

interface Props {
  question: Question;
}

const QuestionDetails = memo(({ question }: Props) => {
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
});

export default QuestionDetails;
