import { useNavigate } from "react-router";
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.css";
import { icons } from "@/shared/assets";

interface Props {
  type?: "question" | "questions" | "page";
}

const ErrorMessage = ({ type = "questions" }: Props) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className={styles.error}>
        {type === "questions" ? (
          <h2 className={styles.errorTitle}>Ошибка при загрузке вопросов</h2>
        ) : type === "question" ? (
          <h2 className={styles.errorTitle}>Вопрос не найден</h2>
        ) : (
          <>
            <img src={icons.notFound} alt="not found" />
            <h2 className={styles.errorTitle}>Страница не найдена</h2>
          </>
        )}
        <p className={styles.errorDescription}>
          Попробуйте вернуться на главную страницу
        </p>
        <Button title="Вернуться" onClick={() => navigate("/")} />
      </div>
    </Wrapper>
  );
};

export default ErrorMessage;
