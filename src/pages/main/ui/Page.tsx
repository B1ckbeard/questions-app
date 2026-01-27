import styles from "./styles.module.css";
import QuestionsFeed from "./QuestionsFeed/QuestionsFeed";
import FiltersSection from "./FiltersSection/FiltersSection";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <QuestionsFeed />
      <FiltersSection />
    </div>
  );
};

export default MainPage;
