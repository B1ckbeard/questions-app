import { useCallback } from "react";
import { Skill } from "@/entities/skill/model/types";
import { Specialization } from "@/entities/specialization/model/types";
import { SelectedFilters } from "../model/types";
import { useUrlParams } from "./useUrlParams";

export const useFilterHandlers = (selectedFilters: SelectedFilters) => {
  const { updateSearchParams, getParam } = useUrlParams();

  const toggleFilter = useCallback(
    <K extends keyof SelectedFilters>(
      key: K,
      value: SelectedFilters[K][number],
      paramName?: string
    ) => {
      const paramKey = paramName || key;
      const currentArray = selectedFilters[key] as SelectedFilters[K][number][];
      const isSelected = currentArray.includes(value);
      let newValue: string | null;
      if (isSelected) {
        const newArray = currentArray.filter((item) => item !== value);
        newValue = newArray.length > 0 ? newArray.join(",") : null;
      } else {
        const newArray = [...currentArray, value];
        newValue = newArray.join(",");
      }
      updateSearchParams({ [paramKey]: newValue });
    },
    [selectedFilters, updateSearchParams]
  );

  const toggleSkillFilter = useCallback(
    (skillId: number) => {
      const skillsParam = getParam("skills");
      const currentSkillIds = skillsParam
        ? skillsParam
            .split(",")
            .map((id) => parseInt(id))
            .filter((id) => !isNaN(id))
        : [];

      const isSelected = currentSkillIds.includes(skillId);
      let newSkillIds: number[];
      if (isSelected) {
        newSkillIds = currentSkillIds.filter((id) => id !== skillId);
      } else {
        newSkillIds = [...currentSkillIds, skillId];
      }
      const newValue = newSkillIds.length > 0 ? newSkillIds.join(",") : null;
      updateSearchParams({ skills: newValue });
    },
    [getParam, updateSearchParams]
  );

  const toggleSpecializationFilter = useCallback(
    (specializationId: number) => {
      updateSearchParams({
        specialization: specializationId.toString(),
        skills: null,
      });
    },
    [updateSearchParams]
  );

  const handleToggleSpecialization = useCallback(
    (specialization: Specialization) => {
      toggleSpecializationFilter(specialization.id);
    },
    [toggleSpecializationFilter]
  );

  const handleToggleSkill = useCallback(
    (skill: Skill) => {
      toggleSkillFilter(skill.id);
    },
    [toggleSkillFilter]
  );

  const handleToggleComplexity = useCallback(
    (complexity: string) =>
      toggleFilter("complexities", complexity, "complexity"),
    [toggleFilter]
  );

  const handleToggleRating = useCallback(
    (rating: number) => toggleFilter("ratings", rating, "rate"),
    [toggleFilter]
  );

  return {
    handleToggleSpecialization,
    handleToggleSkill,
    handleToggleComplexity,
    handleToggleRating,
  };
};
