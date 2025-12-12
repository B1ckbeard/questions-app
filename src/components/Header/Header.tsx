import { Link } from "react-router";
import styles from "./styles.module.css";
import { headerIcons } from "@/shared/assets/header";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.titleBlock}>
          <Link to="/" className={styles.appLink}>
            <img src={headerIcons.logo} alt="logo" className={styles.logo} />
            <img
              src={headerIcons.yeahub}
              alt="Yeahub"
              className={styles.title}
            />
          </Link>
          <nav>
            <ul className={styles.navNenu}>
              <li>
                <Link to="/" className={styles.navLink}>
                  База вопросов
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.navLink}>
                  Тренажер
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.auth}>
          <Link to="/" className={styles.authLink}>
            Вход
          </Link>
          <button className={styles.authButton}>Регистрация</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
