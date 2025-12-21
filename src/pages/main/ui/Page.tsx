import styles from "./styles.module.css";
import Filters from "@/components/Filters/Filters";
import Questions from "@/components/Questions/Questions";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Questions />
      <Filters />
    </div>
  );
};

export default MainPage;
