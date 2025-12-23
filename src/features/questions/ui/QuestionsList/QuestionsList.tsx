import styles from "./styles.module.css";
import QuestionItem from "../QuestionItem/QuestionItem";
import { memo } from "react";
import { Question } from "@/entities/question/model/types";

interface Props {
  questions: Question[];
}

const QuestionsList = memo(({ questions }: Props) => {
  return (
    <div className={styles.questionsList}>
      <div className={styles.questionsHeader}>
        <h2 className={styles.title}>Вопросы</h2>
      </div>
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
