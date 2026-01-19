import styles from "./styles.module.css";
import { memo } from "react";
import { QuestionInfo } from "@/features/question-info";
import { Wrapper } from "@/shared/ui";

const QuestionInfoSection = memo(() => {
  return (
    <div className={styles.info}>
      <Wrapper>
        <QuestionInfo />
      </Wrapper>
    </div>
  );
});

export default QuestionInfoSection;
