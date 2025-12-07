import { Question } from "@/shared/interfaces";
import styles from "./styles.module.css";
import { useState } from "react";
import GradeBadge from "../GradeBadge/GradeBadge";
import DetailsButton from "../DetailsButton/DetailsButton";

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
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.chevrone}
            color="#6a0bff"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
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
