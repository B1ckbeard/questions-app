import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { setCurrentPage } from "@/app/questionsSlice";
import { getPagesRange } from "../helpers/getPagesRange";

export const usePagination = () => {
  const dispatch = useAppDispatch();
  const { currentPage, pagesCount } = useAppSelector(
    (state) => state.questions
  );
  const startPage = 1;
  const paginationSize = 5;
  const delta = Math.floor(paginationSize / 2);

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
