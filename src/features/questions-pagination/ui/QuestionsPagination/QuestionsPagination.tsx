import { Pagination } from "@/shared/ui";
import { usePagination } from "../../lib/usePagination";

const QuestionsPagination = () => {
  const {
    currentPage,
    startPage,
    pagesCount,
    delta,
    pagesRange,
    onPageClick,
    handlePrevPage,
    handleNextPage,
  } = usePagination();

  if (!pagesCount || pagesCount === 0) return null;

  return (
    <Pagination
      currentPage={currentPage}
      startPage={startPage}
      pagesCount={pagesCount}
      delta={delta}
      pagesRange={pagesRange}
      onPageClick={onPageClick}
      handlePrevPage={handlePrevPage}
      handleNextPage={handleNextPage}
    />
  );
};

export default QuestionsPagination;
