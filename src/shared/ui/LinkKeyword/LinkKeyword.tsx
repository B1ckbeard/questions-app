import { memo } from "react";
import styles from "./styles.module.css";

interface Props {
  keyword: string;
  onClick: (keyword: string) => void;
}

const LinkKeyword = memo(({ keyword, onClick }: Props) => {
  return (
    <p className={styles.keyword} onClick={() => onClick(keyword)}>
      #{keyword}
    </p>
  );
});

export default LinkKeyword;
