import { memo, useCallback } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router";
import { Skill } from "@/entities/skill";
import { useCurrentQuestion } from "@/shared/hooks/useCurrentQuestion";
import { GradeBadge, CategoryItem, LinkKeyword } from "@/shared/ui";

const QuestionInfo = memo(() => {
  const navigate = useNavigate();
  const { question } = useCurrentQuestion();

  const handleSkillClick = useCallback(
    (id: number): void => {
      const params = new URLSearchParams();
      params.set("skills", id.toString());
      navigate(`/questions?${params}`);
    },
    [navigate]
  );

  const handleKeywordClick = useCallback(
    (keyword: string): void => {
      const params = new URLSearchParams();
      params.set("keywords", keyword);
      navigate(`/questions?${params}`);
    },
    [navigate]
  );

  return (
    <>
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
          {question.questionSkills.map((skill: Skill) => (
            <CategoryItem
              key={skill.id}
              isSelected={true}
              item={skill}
              title={skill.title}
              onClick={() => handleSkillClick(skill.id)}
            />
          ))}
        </div>
      </div>
      <div className={styles.keywords}>
        <p className={styles.infoTitle}>Ключевые слова: </p>
        <div className={styles.keywordsList}>
          {question.keywords.map((keyword: string, index: number) => (
            <LinkKeyword
              key={index}
              keyword={keyword}
              onClick={() => handleKeywordClick(keyword)}
            />
          ))}
        </div>
      </div>
    </>
  );
});

export default QuestionInfo;
