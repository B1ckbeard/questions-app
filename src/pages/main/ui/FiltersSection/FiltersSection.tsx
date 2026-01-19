import { memo } from "react";
import styles from "./styles.module.css";
import { QuestionsFilters } from "@/features/questions-filters";
import { Wrapper } from "@/shared/ui";

const FiltersSection = memo(() => {
  return (
    <div className={styles.filters}>
      <Wrapper>
        <QuestionsFilters />
      </Wrapper>
    </div>
  );
});

export default FiltersSection;
