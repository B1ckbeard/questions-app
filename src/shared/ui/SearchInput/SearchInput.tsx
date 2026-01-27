import { ChangeEvent } from "react";
import styles from "./styles.module.css";
import SearchIcon from "../SearchIcon/SearchIcon";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
}

const SearchInput = ({ onChange, searchQuery }: Props) => {
  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        className={styles.input}
        value={searchQuery}
        onChange={onChange}
        type="search"
        placeholder="Введите вопрос..."
        aria-label="Поиск вопросов"
      />
    </div>
  );
};

export default SearchInput;
