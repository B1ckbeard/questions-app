import { memo } from "react";
import styles from "./styles.module.css";

interface Props {
  title: string;
  grade: number;
}

const GradeBadge = memo(({ title, grade }: Props) => {
  return (
    <li className={styles.grade}>
      {title}
      <span className={styles.gradeValue}>{grade}</span>
    </li>
  );
});

export default GradeBadge;
