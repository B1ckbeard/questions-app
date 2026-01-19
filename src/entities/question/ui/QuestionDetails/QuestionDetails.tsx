import styles from "./styles.module.css";
import { memo } from "react";
import { Question } from "../../model/types";
import { Wrapper, ButtonShowFilters, QuestionHtml } from "@/shared/ui";

interface Props {
  question: Question;
}

const QuestionDetails = memo(({ question }: Props) => {
  return (
    <div className={styles.details}>
      <Wrapper>
        <div className={styles.questionsHeader}>
          <p className={`${styles.text} ${styles.questionTitle}`}>
            {question.title}
          </p>
          <ButtonShowFilters type={"info"} />
        </div>
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
