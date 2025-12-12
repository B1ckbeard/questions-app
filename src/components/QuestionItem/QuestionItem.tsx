import { Question } from "@/shared/interfaces";
import styles from "./styles.module.css";
import { useState } from "react";
import GradeBadge from "../GradeBadge/GradeBadge";
import DetailsButton from "../DetailsButton/DetailsButton";
import { icons } from "@/shared/assets";

interface Props {
  question: Question;
}

const QuestionItem = ({ question }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleAccordeon = () => setIsOpen((prev) => !prev);

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ""}`}>
      <div className={styles.titleContent}>
        <button className={styles.titleButton} onClick={handleToggleAccordeon}>
          <p className={styles.title}>{question.title}</p>
          <img
            src={icons.chevroneDown}
            alt="chevrone"
            className={styles.chevrone}
          />
        </button>
      </div>
      <div className={styles.accordeon}>
        <div className={styles.info}>
          <ul className={styles.gradeList}>
            <GradeBadge title="Рейтинг:" grade={question.rate} />
            <GradeBadge title="Сложность:" grade={question.complexity} />
          </ul>
          <DetailsButton question={question} />
        </div>
        <p>{question.shortAnswer}</p>
      </div>
    </div>
  );
};

export default QuestionItem;
