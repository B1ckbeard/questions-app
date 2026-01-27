import styles from "./styles.module.css";
import { memo } from "react";
import { icons } from "@/shared/assets";
import { ArrowButton, PaginationButton } from "@/shared/ui";

interface PaginationProps {
  currentPage: number;
  startPage: number;
  pagesCount: number;
  delta: number;
  pagesRange: number[];
  onPageClick: (page: number) => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

const Pagination = memo((props: PaginationProps) => {
  const {
    currentPage,
    startPage,
    pagesCount,
    delta,
    pagesRange,
    onPageClick,
    handlePrevPage,
    handleNextPage,
  } = props;

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
