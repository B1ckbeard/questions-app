import { memo } from "react";
import styles from "./styles.module.css";
import { icons } from "@/shared/assets";

interface Props {
  isOpen: boolean;
}

const ChevronIcon = memo(({ isOpen }: Props) => {
  return (
    <img
      src={icons.chevroneDown}
      alt="chevrone"
      className={`${styles.chevrone} ${isOpen ? styles.open : ""}`}
    />
  );
});

export default ChevronIcon;
