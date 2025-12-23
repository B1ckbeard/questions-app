import { memo } from "react";
import styles from "./styles.module.css";

interface Props {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = memo(({ title, onClick, disabled = false }: Props) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
});

export default Button;
