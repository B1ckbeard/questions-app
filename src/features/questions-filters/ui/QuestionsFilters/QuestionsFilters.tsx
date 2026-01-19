import { memo } from "react";
import styles from "./styles.module.css";
import { useFilters } from "../../lib/hooks/useFilters";
import QuestionsFiltersSkeleton from "../QuestionsFiltersSkeleton/QuestionsFiltersSkeleton";
import QuestionsFiltersCategory from "../QuestionsFiltersCategory/QuestionsFiltersCategory";
import { SearchInput, Button } from "@/shared/ui";

const QuestionsFilters = memo(() => {
  const {
    filterConfigs,
    searchQuery,
    hasActiveFilters,
    handleInputChange,
    handleResetFilters,
    isLoading,
    isError,
  } = useFilters();

  if (isLoading) return <QuestionsFiltersSkeleton />;

  if (isError)
    return (
      <div className={styles.filtersError}>
        <p className={styles.filtersErrorDescription}>
          Ошибка при загрузке фильтров
        </p>
      </div>
    );

  return (
    <div className={styles.filtersList}>
      <SearchInput onChange={handleInputChange} searchQuery={searchQuery} />
      {filterConfigs.map((config, index) => (
        <QuestionsFiltersCategory
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
  );
});

export default QuestionsFilters;
