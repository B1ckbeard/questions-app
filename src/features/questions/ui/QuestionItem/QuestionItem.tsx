import styles from "./styles.module.css";
import { memo, useCallback, useState } from "react";
import ChevronIcon from "@/shared/ui/ChevronIcon/ChevronIcon";
import DetailsButton from "@/shared/ui/DetailsButton/DetailsButton";
import GradeBadge from "@/shared/ui/GradeBadge/GradeBadge";
import QuestionHtml from "@/shared/ui/QuestionHtml/QuestionHtml";
import { Question } from "@/entities/question/model/types";

interface Props {
  question: Question;
}

const QuestionItem = memo(({ question }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleAccordion = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ""}`}>
      <div className={styles.headerContent}>
        <button className={styles.headerButton} onClick={handleToggleAccordion}>
          <p className={styles.title}>{question.title}</p>
          <ChevronIcon isOpen={isOpen} />
        </button>
      </div>
      <div className={styles.accordion}>
        <div className={styles.info}>
          <ul className={styles.gradeList}>
            <GradeBadge title="Рейтинг:" grade={question.rate} />
            <GradeBadge title="Сложность:" grade={question.complexity} />
          </ul>
          <DetailsButton question={question} />
        </div>
        <QuestionHtml answer={question.shortAnswer} />
      </div>
    </div>
  );
});

export default QuestionItem;
