import styles from "./styles.module.css";

interface Props {
  page: number;
  onClick: (page: number) => void;
  isActive: boolean;
}

const PaginationButton = ({ page, onClick, isActive }: Props) => {
  return (
    <button
      onClick={() => onClick(page)}
      className={`${styles.button} ${isActive ? styles.active : ""}`}
    >
      {page}
    </button>
  );
};

export default PaginationButton;
