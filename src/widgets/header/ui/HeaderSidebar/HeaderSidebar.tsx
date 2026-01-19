import { memo } from "react";
import { Link } from "react-router";
import styles from "./styles.module.css";

const HeaderSidebar = memo(() => {
  return (
    <div className={styles.auth}>
      <Link to="/questions" className={styles.authLink}>
        Вход
      </Link>
      <button className={styles.authButton}>Регистрация</button>
    </div>
  );
});

export default HeaderSidebar;
