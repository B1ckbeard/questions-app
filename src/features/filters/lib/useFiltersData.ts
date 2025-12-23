import { useGetSkillsQuery } from "@/entities/skill/api/skillApi";
import { Skill } from "@/entities/skill/model/types";
import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationApi";
import { Specialization } from "@/entities/specialization/model/types";
import { useMemo } from "react";

export const useFiltersData = () => {
  const {
    data: skillsData,
    isLoading: isSkillsLoading,
    isError: isSkillsError,
  } = useGetSkillsQuery({
    page: 1,
    limit: 20,
  });

  const {
    data: specializationsData,
    isLoading: isSpecializationsLoading,
    isError: isSpecializationsError,
  } = useGetSpecializationsQuery({
    page: 1,
    limit: 20,
  });

  const skills: Skill[] = useMemo(() => skillsData?.data || [], [skillsData]);
  const specializations: Specialization[] = useMemo(
    () => specializationsData?.data || [],
    [specializationsData]
  );
  const complexities = useMemo(() => ["1-3", "4-6", "7-8", "9-10"], []);
  const ratings = useMemo(() => [1, 2, 3, 4, 5], []);

  const isLoading = isSkillsLoading || isSpecializationsLoading;
  const isError = isSkillsError || isSpecializationsError;

  return {
    skills,
    specializations,
    complexities,
    ratings,
    isLoading,
    isError,
  };
};
