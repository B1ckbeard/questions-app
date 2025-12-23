import styles from "./styles.module.css";
import FiltersCategory from "../FiltersCategory/FiltersCategory";
import FiltersSkeleton from "../FiltersSkeleton/FiltersSkeleton";
import { memo } from "react";
import Button from "@/shared/ui/Button/Button";
import SearchQuestions from "@/shared/ui/SearchQuestions/SearchQuestions";
import Wrapper from "@/shared/ui/Wrapper/Wrapper";
import { useFilters } from "../../lib/useFilters";

const Filters = memo(() => {
  const {
    filterConfigs,
    searchQuery,
    hasActiveFilters,
    handleInputChange,
    handleResetFilters,
    isLoading,
    isError,
  } = useFilters();

  if (isLoading) return <FiltersSkeleton />;

  if (isError)
    return (
      <div className={styles.filters}>
        <Wrapper>
          <div className={styles.filtersError}>
            <p className={styles.filtersErrorDescription}>
              Ошибка при загрузке фильтров
            </p>
          </div>
        </Wrapper>
      </div>
    );

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
});

export default Filters;
