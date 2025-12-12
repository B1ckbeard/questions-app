import ArrowButton from "../ArrowButton/ArrowButton";
import styles from "./styles.module.css";
import { getPagesRange } from "@/shared/helpers/getPagesRange";
import { icons } from "@/shared/assets";

interface Props {
  pagesCount: number;
  currentPage: number;
  onPageClick: (page: number) => void;
}

const Pagination = ({ pagesCount, currentPage, onPageClick }: Props) => {
  const startPage = 1;
  const paginationSize = 5;
  const delta = Math.floor(paginationSize / 2);

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

  return (
    <div className={styles.pagination}>
      <ArrowButton
        side="left"
        onClick={handlePrevPage}
        disabled={currentPage === startPage}
      />
      {currentPage > delta + 1 && (
        <>
          <button
            onClick={() => onPageClick(startPage)}
            className={`${styles.button} ${
              currentPage === startPage ? styles.active : ""
            }`}
          >
            <p>{startPage}</p>
          </button>
          <img src={icons.dots} alt="dots" />
        </>
      )}
      {pagesRange.map((page: number) => (
        <button
          key={page}
          onClick={() => onPageClick(page)}
          className={`${styles.button} ${
            currentPage === page ? styles.active : ""
          }`}
        >
          <p>{page}</p>
        </button>
      ))}
      {currentPage < pagesCount - delta && (
        <>
          <img src={icons.dots} alt="dots" />
          <button
            onClick={() => onPageClick(pagesCount)}
            className={`${styles.button} ${
              currentPage === pagesCount ? styles.active : ""
            }`}
          >
            <p>{pagesCount}</p>
          </button>
        </>
      )}
      <ArrowButton
        side="right"
        onClick={handleNextPage}
        disabled={currentPage === pagesCount}
      />
    </div>
  );
};

export default Pagination;
