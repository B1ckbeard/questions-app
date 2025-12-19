import { Question } from "@/shared/interfaces";
import styles from "./styles.module.css";
import { useState } from "react";
import GradeBadge from "../GradeBadge/GradeBadge";
import DetailsButton from "../DetailsButton/DetailsButton";
import { icons } from "@/shared/assets";
import QuestionHtml from "../QuestionHtml/QuestionHtml";

interface Props {
  question: Question;
}

const QuestionItem = ({ question }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleAccordeon = () => setIsOpen((prev) => !prev);

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ""}`}>
      <div className={styles.headerContent}>
        <button className={styles.headerButton} onClick={handleToggleAccordeon}>
          <p className={styles.title}>{question.title}</p>
          <img
            src={icons.chevroneDown}
            alt="chevrone"
            className={styles.chevrone}
          />
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
};

export default QuestionItem;
