import { memo } from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
}

const Wrapper = memo(({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
});

export default Wrapper;
