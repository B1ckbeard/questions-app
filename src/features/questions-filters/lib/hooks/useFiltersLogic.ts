import { useMemo } from "react";
import { SelectedFilters } from "../../model/types";
import { Skill } from "@/entities/skill";
import { Specialization } from "@/entities/specialization";

export const useFiltersLogic = (
  skills: Skill[],
  specializations: Specialization[],
  getParam: (key: string) => string | null
) => {
  const selectedSpecializationId = useMemo(() => {
    const specParam = getParam("specialization");
    return specParam ? parseInt(specParam) : null;
  }, [getParam]);

  const selectedSpecialization = useMemo(() => {
    if (!selectedSpecializationId) return null;
    return (
      specializations.find((spec) => spec.id === selectedSpecializationId) ||
      null
    );
  }, [selectedSpecializationId, specializations]);

  const filteredSkills = useMemo(() => {
    if (!selectedSpecialization) return skills;

    return skills.filter((skill) => {
      if (skill.specializations && skill.specializations.length > 0) {
        return skill.specializations.some(
          (spec) => spec.id === selectedSpecialization.id
        );
      }
      return true;
    });
  }, [skills, selectedSpecialization]);

  const selectedFilters = useMemo((): SelectedFilters => {
    const skillsParam = getParam("skills");
    const complexitiesParam = getParam("complexity");
    const ratingsParam = getParam("rate");
    const searchParam = getParam("title");

    return {
      skills: skillsParam
        ? (skillsParam
            .split(",")
            .map((id) => parseInt(id))
            .filter((id) => !isNaN(id))
            .map((id) => skills.find((skill: Skill) => skill.id === id))
            .filter(Boolean) as Skill[])
        : [],
      complexities: complexitiesParam ? complexitiesParam.split(",") : [],
      ratings: ratingsParam
        ? ratingsParam
            .split(",")
            .map((r) => parseInt(r))
            .filter((r) => !isNaN(r))
        : [],
      search: searchParam || "",
    };
  }, [getParam, skills]);

  return {
    selectedFilters,
    selectedSpecializationId,
    selectedSpecialization,
    filteredSkills,
  };
};
