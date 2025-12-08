import { useEffect, useMemo, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.css";
import { fetchSkills } from "@/api";
import FiltersCategory from "../FiltersCategory/FiltersCategory";
import SearchQuestions from "../SearchQuestions/SearchQuestions";
import Button from "../Button/Button";
import { useFilters } from "@/shared/hooks/useFilters";

interface Skill {
  id: number;
  title: string;
  imageSrc: string;
}

const Filters = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const complexities = useMemo(() => ["1-3", "4-6", "7-8", "9-10"], []);
  const ratings = useMemo(() => [1, 2, 3, 4, 5], []);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const data = await fetchSkills(1, 15);
        setSkills(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSkills();
  }, []);

  const {
    selectedFilters,
    searchQuery,
    hasActiveFilters,
    handleToggleSkill,
    handleToggleComplexity,
    handleToggleRating,
    handleInputChange,
    handleResetFilters,
    updateFiltersFromURL,
  } = useFilters({
    skills,
  });

  useEffect(() => {
    if (skills.length > 0) {
      updateFiltersFromURL();
    }
  }, [skills.length, updateFiltersFromURL]);

  return (
    <div className={styles.filters}>
      <Wrapper>
        <div className={styles.filtersList}>
          <SearchQuestions
            onChange={handleInputChange}
            searchQuery={searchQuery}
          />
          <FiltersCategory
            title="Выберите навыки"
            items={skills}
            selectedItems={selectedFilters.skills}
            onToggle={handleToggleSkill}
            getItemValue={(skill: Skill) => skill.id}
            getItemLabel={(skill: Skill) => skill.title}
            limit={5}
          />
          <FiltersCategory
            title="Сложность вопросов"
            items={complexities}
            selectedItems={selectedFilters.complexities}
            onToggle={handleToggleComplexity}
          />
          <FiltersCategory
            title="Рейтинг вопроса"
            items={ratings}
            selectedItems={selectedFilters.ratings}
            onToggle={handleToggleRating}
          />
          <Button
            title="Сбросить фильтры"
            onClick={handleResetFilters}
            disabled={!hasActiveFilters}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Filters;
