import { memo } from "react";
import styles from "./styles.module.css";

interface Props {
  onClick: (arg: boolean) => void;
  isShow: boolean;
}

const LinkShowMore = memo(({ onClick, isShow }: Props) => {
  return (
    <a className={styles.showMoreLink} onClick={() => onClick(!isShow)}>
      {isShow ? "Скрыть" : "Посмотреть все"}
    </a>
  );
});

export default LinkShowMore;
