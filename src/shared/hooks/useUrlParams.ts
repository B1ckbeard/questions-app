import { useCallback } from "react";
import { useSearchParams } from "react-router";

export const useUrlParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = useCallback(
    (updates: Partial<Record<string, string | null>>) => {
      const newParams = new URLSearchParams(searchParams);
      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === "") {
          newParams.delete(key);
        } else {
          newParams.set(key, value as string);
        }
      });
      if (newParams.toString() && !newParams.has("order")) {
        newParams.set("order", "ASC");
      }
      setSearchParams(newParams, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  const getParam = useCallback(
    (key: string): string | null => {
      return searchParams.get(key);
    },
    [searchParams]
  );

  const hasParam = useCallback(
    (key: string): boolean => {
      return searchParams.has(key);
    },
    [searchParams]
  );

  return {
    searchParams,
    setSearchParams,
    updateSearchParams,
    getParam,
    hasParam,
  };
};
