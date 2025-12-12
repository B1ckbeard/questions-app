import { useNavigate } from "react-router";
import styles from "./styles.module.css";
import { icons } from "@/shared/assets";

const BackLink = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navigate}>
      <img src={icons.caretLeft} alt="caretLeft" />
      <a onClick={() => navigate(-1)} className={styles.link}>
        Список вопросов
      </a>
    </div>
  );
};

export default BackLink;
