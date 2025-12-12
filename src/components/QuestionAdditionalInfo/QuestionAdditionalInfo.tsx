import { Question, QuestionSkill } from "@/shared/interfaces";
import styles from "./styles.module.css";
import GradeBadge from "../GradeBadge/GradeBadge";
import Wrapper from "../Wrapper/Wrapper";
import { useAppDispatch } from "@/app/appStore";
import { setFilters } from "@/app/questionsSlice";
import { useNavigate } from "react-router";

interface Props {
  question: Question;
}

const QuestionAdditionalInfo = ({ question }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSkillClick = (id: number): void => {
    const params = new URLSearchParams();
    params.set("skills", id.toString());
    dispatch(setFilters(params.toString()));
    navigate(`/questions?${params}`, { replace: true });
  };

  const handleKeywordClick = (keyword: string): void => {
    const params = new URLSearchParams();
    params.set("keywords", keyword);
    dispatch(setFilters(params.toString()));
    navigate(`/questions?${params}`, { replace: true });
  };

  return (
    <div className={styles.info}>
      <Wrapper>
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
              <div
                key={skill.id}
                className={styles.skill}
                onClick={() => handleSkillClick(skill.id)}
              >
                <p className={styles.skillTitle}>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.keywords}>
          <p className={styles.infoTitle}>Ключевые слова: </p>
          <div className={styles.keywordsList}>
            {question.keywords.map((keyword: string, index: number) => (
              <p
                key={index}
                className={styles.keyword}
                onClick={() => handleKeywordClick(keyword)}
              >
                #{keyword}
              </p>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default QuestionAdditionalInfo;
