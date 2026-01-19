import { useCallback, useEffect, useMemo } from "react";
import { useFiltersData } from "./useFiltersData";
import { useFilterHandlers } from "./useFiltersHandlers";
import { useFiltersLogic } from "./useFiltersLogic";
import { useSearch } from "./useSearch";
import { useUrlParams } from "./useUrlParams";
import { FilterConfig, FilterItem } from "../../model/types";

export const useFilters = () => {
  const { skills, specializations, complexities, ratings, isLoading, isError } =
    useFiltersData();

  const {
    searchParams,
    setSearchParams,
    updateSearchParams,
    getParam,
    hasParam,
  } = useUrlParams();

  const { searchQuery, setSearchQuery, handleInputChange } = useSearch(
    searchParams,
    updateSearchParams
  );

  const {
    selectedFilters,
    selectedSpecializationId,
    selectedSpecialization,
    filteredSkills,
  } = useFiltersLogic(skills, specializations, getParam);

  const {
    handleToggleSpecialization,
    handleToggleSkill,
    handleToggleComplexity,
    handleToggleRating,
  } = useFilterHandlers(selectedFilters);

  useEffect(() => {
    if (!selectedSpecializationId && specializations.length > 0) {
      const specToUse =
        specializations.find((spec) => spec.id === 11) || specializations[0];
      updateSearchParams({ specialization: specToUse.id.toString() });
    }
  }, [specializations, selectedSpecializationId, updateSearchParams]);

  const hasActiveFilters = useMemo(
    () =>
      ["title", "skills", "complexity", "rate", "keywords"].some((param) =>
        hasParam(param)
      ),
    [hasParam]
  );

  const handleResetFilters = useCallback(() => {
    setSearchParams({}, { replace: true });
    setSearchQuery("");
  }, [setSearchParams, setSearchQuery]);

  const filterConfigs = useMemo(
    (): FilterConfig<FilterItem>[] => [
      {
        title: "Выберите специализацию",
        items: specializations,
        selectedItems: selectedSpecialization ? [selectedSpecialization] : [],
        onToggle: handleToggleSpecialization as (item: FilterItem) => void,
        limit: 5,
      },
      {
        title: "Выберите навыки",
        items: filteredSkills,
        selectedItems: selectedFilters.skills,
        onToggle: handleToggleSkill as (item: FilterItem) => void,
        limit: 5,
      },
      {
        title: "Сложность вопросов",
        items: complexities,
        selectedItems: selectedFilters.complexities,
        onToggle: handleToggleComplexity as (item: FilterItem) => void,
      },
      {
        title: "Рейтинг вопроса",
        items: ratings,
        selectedItems: selectedFilters.ratings,
        onToggle: handleToggleRating as (item: FilterItem) => void,
      },
    ],
    [
      specializations,
      selectedSpecialization,
      handleToggleSpecialization,
      filteredSkills,
      selectedFilters,
      handleToggleSkill,
      complexities,
      handleToggleComplexity,
      ratings,
      handleToggleRating,
    ]
  );

  return {
    filterConfigs,
    searchQuery,
    hasActiveFilters,
    handleInputChange,
    handleResetFilters,
    isLoading,
    isError,
  };
};
