import { range } from "lodash";

export const getPagesRange = (
  currentPage: number,
  delta: number,
  pagesCount: number,
  paginationSize: number
) => {
  let start = currentPage - delta;
  let end = currentPage + delta;

  if (start < 1) {
    start = 1;
    end = Math.min(pagesCount, paginationSize);
  }

  if (end > pagesCount) {
    end = pagesCount;
    start = Math.max(1, pagesCount - paginationSize + 1);
  }
  const pagesRange = range(start, end + 1);

  return pagesRange;
};
