import { useDebounce } from "@/shared/hooks/useDebounce";
import { useCallback, useEffect, useState } from "react";

type UpdateSearchParams = (
  updates: Partial<Record<string, string | null>>
) => void;

export const useSearch = (
  searchParams: URLSearchParams,
  updateSearchParams: UpdateSearchParams
) => {
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get("title") || ""
  );
  const TIMEOUT = 1000;
  const debouncedSearch = useDebounce(searchQuery, TIMEOUT);

  const updateDebouncedSearch = useCallback(
    (search: string) => {
      updateSearchParams({ title: search || null });
    },
    [updateSearchParams]
  );

  useEffect(() => {
    updateDebouncedSearch(debouncedSearch);
  }, [debouncedSearch, updateDebouncedSearch]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value;
      setSearchQuery(value);
    },
    []
  );
  return {
    searchQuery,
    setSearchQuery,
    handleInputChange,
  };
};
