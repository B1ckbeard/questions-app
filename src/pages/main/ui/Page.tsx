import styles from "./styles.module.css";
import { Filters } from "@/features/filters";
import { Questions } from "@/features/questions";
import { memo } from "react";

const MainPage = memo(() => {
  return (
    <div className={styles.container}>
      <Questions />
      <Filters />
    </div>
  );
});

export default MainPage;
