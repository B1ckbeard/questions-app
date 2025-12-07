import { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.css";
import { fetchSkills } from "@/api";
import FiltersCategory from "../FiltersCategory/FiltersCategory";
import SearchQuestions from "../SearchQuestions/SearchQuestions";
import { useAppDispatch } from "@/app/appStore";
import { setFilters } from "@/app/questionsSlice";

interface Skill {
  id: number;
  title: string;
  imageSrc: string;
}

interface SelectedFilters {
  skills: Skill[];
  complexities: string[];
  ratings: number[];
}

const Filters = () => {
  const dispatch = useAppDispatch();
  const [skills, setSkills] = useState<Skill[]>([]);
  const complexities = ["1-3", "4-6", "7-8", "9-10"];
  const ratings = [1, 2, 3, 4, 5];

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    skills: [],
    complexities: [],
    ratings: [],
  });

  const updateURL = (filters: SelectedFilters) => {
    const params = new URLSearchParams();

    if (filters.skills.length > 0) {
      const skillIds = filters.skills.map((skill) => skill.id).join(",");
      params.set("skills", skillIds);
    }
    if (filters.complexities.length > 0) {
      const complexityValues = filters.complexities.join(",");
      params.set("complexity", complexityValues);
    }
    if (filters.ratings.length > 0) {
      const ratingValues = filters.ratings.join(",");
      params.set("rate", ratingValues);
    }
    if (params.size > 0) {
      params.set("order", "ASC");
    }
    dispatch(setFilters(params.toString()));
  };

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await fetchSkills(1, 10);
        setSkills(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getQuestions();
  }, []);

  const handleToggleSkill = (skill: Skill) => {
    setSelectedFilters((prev) => {
      const newSkills = prev.skills.some((s) => s.id === skill.id)
        ? prev.skills.filter((s) => s.id !== skill.id)
        : [...prev.skills, skill];

      const newFilters = { ...prev, skills: newSkills };
      updateURL(newFilters);
      return newFilters;
    });
  };

  const handleToggleComplexity = (complexity: string) => {
    setSelectedFilters((prev) => {
      const newComplexities = prev.complexities.includes(complexity)
        ? prev.complexities.filter((c) => c !== complexity)
        : [...prev.complexities, complexity];

      const newFilters = { ...prev, complexities: newComplexities };
      updateURL(newFilters);
      return newFilters;
    });
  };

  const handleToggleRating = (rating: number) => {
    setSelectedFilters((prev) => {
      const newRatings = prev.ratings.includes(rating)
        ? prev.ratings.filter((r) => r !== rating)
        : [...prev.ratings, rating];

      const newFilters = { ...prev, ratings: newRatings };
      updateURL(newFilters);
      return newFilters;
    });
  };

  return (
    <div className={styles.filters}>
      <Wrapper>
        <div className={styles.filtersList}>
          <SearchQuestions />
          <FiltersCategory
            title="Выберите навыки"
            items={skills}
            selectedItems={selectedFilters.skills}
            onToggle={handleToggleSkill}
            getItemValue={(skill: Skill) => skill.id}
            getItemLabel={(skill: Skill) => skill.title}
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
        </div>
      </Wrapper>
    </div>
  );
};

export default Filters;
