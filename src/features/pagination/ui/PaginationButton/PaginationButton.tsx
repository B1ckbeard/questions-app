import { memo, useCallback } from "react";
import styles from "./styles.module.css";

interface Props {
  page: number;
  onClick: (page: number) => void;
  isActive: boolean;
}

const PaginationButton = memo(({ page, onClick, isActive }: Props) => {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      onClick(page);
    },
    [page, onClick]
  );

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${isActive ? styles.active : ""}`}
    >
      {page}
    </button>
  );
});

export default PaginationButton;
