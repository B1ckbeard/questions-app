import { ChangeEvent } from "react";
import styles from "./styles.module.css";
import { icons } from "@/shared/assets";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
}

const SearchQuestions = ({ onChange, searchQuery }: Props) => {
  return (
    <div className={styles.search}>
      <img src={icons.searchIcon} alt="searchIcon" />
      <input
        className={styles.input}
        value={searchQuery}
        onChange={onChange}
        type="text"
        placeholder="Введите вопрос..."
      />
    </div>
  );
};

export default SearchQuestions;
