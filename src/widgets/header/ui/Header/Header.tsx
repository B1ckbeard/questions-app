import { memo, useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "./styles.module.css";
import { headerIcons } from "@/shared/assets/header";
import { ChevronIcon, ButtonBurger } from "@/shared/ui";

const Header = memo(() => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileWindowSize = 768;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < mobileWindowSize);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.titleBlock}>
          <Link to="/questions" className={styles.appLink}>
            <img src={headerIcons.logo} alt="logo" className={styles.logo} />
            <img
              src={headerIcons.yeahub}
              alt="Yeahub"
              className={styles.title}
            />
          </Link>
          <nav>
            {isMobile ? (
              <div className={styles.mobileMenu}>
                <button
                  className={styles.mobileMenuButton}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Подготовка
                  <ChevronIcon
                    isOpen={isMenuOpen}
                    color="currentColor"
                    duration=".1s"
                  />
                </button>
                {isMenuOpen && (
                  <div className={styles.popoverMenu}>
                    <ul className={styles.popoverNavNenu}>
                      <li className={styles.navNenuItem}>
                        <Link to="/questions" className={styles.navLink}>
                          База вопросов
                        </Link>
                      </li>
                      <li className={styles.navNenuItem}>
                        <Link to="/questions" className={styles.navLink}>
                          Тренажер
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <ul className={styles.navNenu}>
                <li className={styles.navNenuItem}>
                  <Link to="/questions" className={styles.navLink}>
                    База вопросов
                  </Link>
                </li>
                <li className={styles.navNenuItem}>
                  <Link to="/questions" className={styles.navLink}>
                    Тренажер
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
        {isMobile ? (
          <ButtonBurger />
        ) : (
          <div className={styles.auth}>
            <Link to="/questions" className={styles.authLink}>
              Вход
            </Link>
            <button className={styles.authButton}>Регистрация</button>
          </div>
        )}
      </div>
    </header>
  );
});

export default Header;
