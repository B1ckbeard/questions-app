import styles from "./styles.module.css";
import Button from "@/components/Button/Button";
import Wrapper from "@/components/Wrapper/Wrapper";
import { icons } from "@/shared/assets";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className={styles.container}>
        <img src={icons.notFound} alt="not found" />
        <p className={styles.descriprion}>Страница не найдена</p>
        <Button title="Вернуться назад" onClick={() => navigate("/")} />
      </div>
    </Wrapper>
  );
};

export default NotFoundPage;
