import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.css";
import FiltersCategory from "../FiltersCategory/FiltersCategory";
import SearchQuestions from "../SearchQuestions/SearchQuestions";
import Button from "../Button/Button";
import { useFilters } from "@/shared/hooks/useFilters";

const Filters = () => {
  const {
    filterConfigs,
    searchQuery,
    hasActiveFilters,
    handleInputChange,
    handleResetFilters,
  } = useFilters();

  return (
    <div className={styles.filters}>
      <Wrapper>
        <div className={styles.filtersList}>
          <SearchQuestions
            onChange={handleInputChange}
            searchQuery={searchQuery}
          />
          {filterConfigs.map((config, index) => (
            <FiltersCategory
              key={index}
              title={config.title}
              items={config.items}
              selectedItems={config.selectedItems}
              onToggle={config.onToggle}
              limit={config.limit}
            />
          ))}
          <Button
            title="Сбросить фильтры"
            onClick={handleResetFilters}
            disabled={!hasActiveFilters}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Filters;
