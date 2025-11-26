import { Question, QuestionSkill } from "@/shared/interfaces";
import styles from "./styles.module.css";
import GradeBadge from "../GradeBadge/GradeBadge";

interface Props {
  question: Question;
}

const QuestionAdditionalInfo = ({ question }: Props) => {
  return (
    <div className={styles.info}>
      <div className={styles.wrapper}>
        <div className={styles.level}>
          <p className={styles.infoTitle}>Уровень: </p>
          <ul className={styles.gradeList}>
            <GradeBadge title="Рейтинг:" grade={question.rate} />
            <GradeBadge title="Сложность:" grade={question.complexity} />
          </ul>
        </div>
        <div className={styles.skills}>
          <p className={styles.infoTitle}>Навыки: </p>
          <div className={styles.skillsList}>
            {question.questionSkills.map((skill: QuestionSkill) => (
              <div key={skill.id} className={styles.skill}>
                <p className={styles.skillTitle}>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.keywords}>
          <p className={styles.infoTitle}>Ключевые слова: </p>
          <div className={styles.keywordsList}>
            {question.keywords.map((keyword: string, index: number) => (
              <p key={index} className={styles.keywordTitle}>
                #{keyword}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAdditionalInfo;
