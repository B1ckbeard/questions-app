import styles from "./styles.module.css";
import { useNavigate } from "react-router";
import { memo, useCallback } from "react";
import GradeBadge from "@/shared/ui/GradeBadge/GradeBadge";
import { Question } from "@/entities/question/model/types";
import { Skill } from "@/entities/skill/model/types";
import FiltersCategoryItem from "@/features/filters/ui/FiltersCategoryItem/FiltersCategoryItem";
import LinkKeyword from "@/shared/ui/LinkKeyword/LinkKeyword";
import Wrapper from "@/shared/ui/Wrapper/Wrapper";

interface Props {
  question: Question;
}

const QuestionAdditionalInfo = memo(({ question }: Props) => {
  const navigate = useNavigate();

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
            {question.questionSkills.map((skill: Skill) => (
              <FiltersCategoryItem
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
      </Wrapper>
    </div>
  );
});

export default QuestionAdditionalInfo;
