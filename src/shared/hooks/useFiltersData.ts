import { useGetSkillsQuery } from "@/app/skillsApi";
import { useGetSpecializationsQuery } from "@/app/specializationsApi";
import { Skill, Specialization } from "../interfaces";
import { useMemo } from "react";

export const useFiltersData = () => {
  const { data: skillsData } = useGetSkillsQuery({
    page: 1,
    limit: 20,
  });

  const { data: specializationsData } = useGetSpecializationsQuery({
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

  return {
    skills,
    specializations,
    complexities,
    ratings,
  };
};
