import { useAppDispatch } from "@/app/appStore";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDebounce } from "./useDebounce";
import { resetFilters, setFilters } from "@/app/questionsSlice";

export interface Skill {
  id: number;
  title: string;
  imageSrc: string;
}

export interface SelectedFilters {
  skills: Skill[];
  complexities: string[];
  ratings: number[];
  search: string;
}

export interface Props {
  skills: Skill[];
  initialFilters?: Partial<SelectedFilters>;
}

export const useFilters = ({ skills, initialFilters = {} }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const TIMEOUT = 1000;
  const [searchQuery, setSearchQuery] = useState<string>(
    initialFilters.search || ""
  );
  const debouncedSearch = useDebounce(searchQuery, TIMEOUT);

  const initFilters: SelectedFilters = useMemo(
    () => ({
      skills: [],
      complexities: [],
      ratings: [],
      search: "",
      ...initialFilters,
    }),
    [initialFilters]
  );

  const [selectedFilters, setSelectedFilters] =
    useState<SelectedFilters>(initFilters);

  const buildQueryString = useCallback((filters: SelectedFilters): string => {
    const params = new URLSearchParams();

    if (filters.skills.length > 0) {
      params.set("skills", filters.skills.map((skill) => skill.id).join(","));
    }

    if (filters.complexities.length > 0) {
      params.set("complexity", filters.complexities.join(","));
    }

    if (filters.ratings.length > 0) {
      params.set("rate", filters.ratings.join(","));
    }

    if (filters.search?.trim()) {
      params.set("title", filters.search.trim());
    }

    if (params.toString() && !params.has("order")) {
      params.set("order", "ASC");
    }

    return params.toString();
  }, []);

  const updateURL = useCallback(
    (filters: SelectedFilters) => {
      const queryString = buildQueryString(filters);
      navigate(`?${queryString}`, { replace: true });
    },
    [buildQueryString, navigate]
  );

  useEffect(() => {
    const queryString = buildQueryString({
      ...selectedFilters,
      search: debouncedSearch,
    });
    dispatch(setFilters(queryString));
  }, [selectedFilters, debouncedSearch, dispatch, buildQueryString]);

  const parseQueryParams = useCallback((): SelectedFilters => {
    const params = new URLSearchParams(location.search);

    const skillsParam = params.get("skills");
    const complexitiesParam = params.get("complexity");
    const ratingsParam = params.get("rate");
    const searchParam = params.get("title");

    return {
      skills: skillsParam
        ? (skillsParam
            .split(",")
            .map((id) => parseInt(id))
            .map((id) => skills.find((skill) => skill.id === id))
            .filter(Boolean) as Skill[])
        : [],
      complexities: complexitiesParam ? complexitiesParam.split(",") : [],
      ratings: ratingsParam
        ? ratingsParam.split(",").map((r) => parseInt(r))
        : [],
      search: searchParam || "",
    };
  }, [location.search, skills]);

  const updateFiltersFromURL = useCallback(() => {
    if (skills.length > 0) {
      const restoredFilters = parseQueryParams();
      setSelectedFilters(restoredFilters);
      setSearchQuery(restoredFilters.search);
    }
  }, [parseQueryParams, skills.length]);

  const hasActiveFilters = useMemo(() => {
    return location.search.length > 0;
  }, [location.search.length]);

  const toggleFilter = useCallback(
    <K extends keyof SelectedFilters>(
      key: K,
      value: SelectedFilters[K][number]
    ) => {
      setSelectedFilters((prev) => {
        const currentArray = prev[key] as SelectedFilters[K][number][];
        const isSelected = currentArray.includes(value);

        const newArray = isSelected
          ? currentArray.filter((item) => item !== value)
          : [...currentArray, value];

        const newFilters = { ...prev, [key]: newArray };
        updateURL(newFilters);
        return newFilters;
      });
    },
    [updateURL]
  );

  const handleToggleSkill = useCallback(
    (skill: Skill) => toggleFilter("skills", skill),
    [toggleFilter]
  );

  const handleToggleComplexity = useCallback(
    (complexity: string) => toggleFilter("complexities", complexity),
    [toggleFilter]
  );

  const handleToggleRating = useCallback(
    (rating: number) => toggleFilter("ratings", rating),
    [toggleFilter]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value;
      setSearchQuery(value);
      setSelectedFilters((prev) => {
        const newFilters = { ...prev, search: value };
        updateURL(newFilters);
        return newFilters;
      });
    },
    [updateURL]
  );

  const handleResetFilters = useCallback(() => {
    dispatch(resetFilters());
    setSelectedFilters(initFilters);
    setSearchQuery("");
    navigate(`/`, { replace: true });
  }, [dispatch, initFilters, navigate]);

  return {
    selectedFilters,
    searchQuery,
    debouncedSearch,
    hasActiveFilters,
    setSearchQuery,
    handleToggleSkill,
    handleToggleComplexity,
    handleToggleRating,
    handleInputChange,
    handleResetFilters,
    updateFiltersFromURL,
  };
};
