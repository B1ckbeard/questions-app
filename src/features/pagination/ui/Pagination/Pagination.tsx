import styles from "./styles.module.css";
import { icons } from "@/shared/assets";
import PaginationButton from "../PaginationButton/PaginationButton";
import { memo } from "react";
import ArrowButton from "@/shared/ui/ArrowButton/ArrowButton";
import { usePagination } from "../../lib/usePagination";

const Pagination = memo(() => {
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

  if (pagesCount === 0) return null;

  return (
    <div className={styles.pagination}>
      <ArrowButton
        side="left"
        onClick={handlePrevPage}
        disabled={currentPage === startPage}
      />
      {currentPage > delta + 1 && (
        <>
          <PaginationButton
            page={startPage}
            onClick={() => onPageClick(startPage)}
            isActive={currentPage === startPage}
          />
          <img src={icons.dots} alt="dots" />
        </>
      )}
      {pagesRange.map((page: number) => (
        <PaginationButton
          key={page}
          page={page}
          onClick={() => onPageClick(page)}
          isActive={currentPage === page}
        />
      ))}
      {currentPage < pagesCount - delta && (
        <>
          <img src={icons.dots} alt="dots" />
          <PaginationButton
            page={pagesCount}
            onClick={() => onPageClick(pagesCount)}
            isActive={currentPage === pagesCount}
          />
        </>
      )}
      <ArrowButton
        side="right"
        onClick={handleNextPage}
        disabled={currentPage === pagesCount}
      />
    </div>
  );
});

export default Pagination;
