import styles from "./styles.module.css";
import { useCallback, useEffect, useState } from "react";
import { Question } from "@/shared/interfaces";
import { fetchQuestions } from "@/api";
import QuestionsListWithPagination from "@/components/QuestionsListWithPagination/QuestionsListWithPagination";
import Filters from "@/components/Filters/Filters";
import { useAppSelector } from "@/app/appStore";
import { useLocation } from "react-router";
import Wrapper from "@/components/Wrapper/Wrapper";

const MainPage = () => {
  const { filters } = useAppSelector((state) => state.questions);
  const location = useLocation();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const limit: number = 10;

  const getQuestions = useCallback(async () => {
    const queryParams = location.search ? filters : "";
    fetchQuestions(currentPage, limit, queryParams)
      .then((data) => {
        setQuestions(data.data);
        setPagesCount(Math.ceil(data.total / limit));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage, filters, location.search]);

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  return (
    <div className={styles.container}>
      {questions.length > 0 ? (
        <QuestionsListWithPagination
          questions={questions}
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageClick={setCurrentPage}
        />
      ) : (
        <Wrapper>
          <div className={styles.questionsTitle}>
            <h2 className={styles.title}>Вопросы</h2>
          </div>
          <p className={styles.desciption}>
            К сожалению, по запросу ничего не найдено. Попробуйте изменить
            запрос или воспользуйтесь нашими категориями.
          </p>
        </Wrapper>
      )}
      <Filters />
    </div>
  );
};

export default MainPage;
