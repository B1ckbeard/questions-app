import { memo } from "react";
import styles from "./styles.module.css";
import { Question, QuestionItem } from "@/entities/question";
import { ButtonShowFilters } from "@/shared/ui";

interface Props {
  questions: Question[];
}

const QuestionsList = memo(({ questions }: Props) => {
  return (
    <div className={styles.questionsList}>
      <div className={styles.questionsHeader}>
        <h2 className={styles.title}>Вопросы</h2>
        <ButtonShowFilters type={"filters"} />
      </div>
      <hr className={styles.questionsHeaderHr} />
      {questions.length > 0 ? (
        questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))
      ) : (
        <p className={styles.desciption}>
          К сожалению, по запросу ничего не найдено. Попробуйте изменить запрос
          или воспользуйтесь нашими категориями.
        </p>
      )}
    </div>
  );
});

export default QuestionsList;
