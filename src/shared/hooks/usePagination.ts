import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { resetPagination, setCurrentPage } from "@/app/questionsSlice";
import { getPagesRange } from "../helpers/getPagesRange";
import { useSearchParams } from "react-router";
import { useEffect } from "react";

export const usePagination = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { currentPage, pagesCount } = useAppSelector(
    (state) => state.questions
  );
  const startPage = 1;
  const paginationSize = 5;
  const delta = Math.floor(paginationSize / 2);

  const filtersString = searchParams.toString();

  useEffect(() => {
    dispatch(resetPagination());
  }, [dispatch, filtersString]);

  const onPageClick = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageClick(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pagesCount) {
      onPageClick(currentPage + 1);
    }
  };

  const pagesRange = getPagesRange(
    currentPage,
    delta,
    pagesCount,
    paginationSize
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
