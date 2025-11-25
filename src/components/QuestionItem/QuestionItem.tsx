import { Question } from "@/shared/interfaces";
import styles from "./styles.module.css";

interface Props {
  question: Question;
}

const QuestionItem = ({ question }: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.titleContent}>
        <button className={styles.titleButton}>
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
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuestionItem;
