import { Link } from "react-router";
import styles from "./styles.module.css";
import { memo, useMemo } from "react";
import { Question } from "@/entities/question/model/types";

interface Props {
  question: Question;
}

const DetailsButton = memo(({ question }: Props) => {
  const SvgIcon = useMemo(
    () => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="var(--color-black-600)"
      >
        <path
          d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12.5 2.5V17.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M6.66699 7.5L9.16699 10L6.66699 12.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    []
  );

  return (
    <Link
      to={`/questions/${question.id}`}
      state={question}
      className={styles.detailsButton}
    >
      {SvgIcon}
      Подробнее
    </Link>
  );
});

export default DetailsButton;
