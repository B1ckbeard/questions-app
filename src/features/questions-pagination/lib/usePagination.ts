import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { useSearchParams } from "react-router";
import { useCallback, useEffect, useMemo } from "react";
import { getPagesRange } from "./getPagesRange";
import { resetPagination, setCurrentPage } from "../model/slice";

export const usePagination = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { currentPage, pagesCount } = useAppSelector(
    (state) => state.pagination
  );
  const startPage = 1;
  const paginationSize = 5;
  const delta = Math.floor(paginationSize / 2);

  const filtersString = searchParams.toString();

  useEffect(() => {
    dispatch(resetPagination());
  }, [dispatch, filtersString]);

  const onPageClick = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch]
  );

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      onPageClick(currentPage - 1);
    }
  }, [currentPage, onPageClick]);

  const handleNextPage = useCallback(() => {
    if (currentPage < pagesCount) {
      onPageClick(currentPage + 1);
    }
  }, [currentPage, pagesCount, onPageClick]);

  const pagesRange = useMemo(
    () => getPagesRange(currentPage, delta, pagesCount, paginationSize),
    [currentPage, delta, pagesCount, paginationSize]
  );

  return {
    currentPage,
    startPage,
    pagesCount,
    delta,
    pagesRange,
    onPageClick,
    handlePrevPage,
    handleNextPage,
  };
};
