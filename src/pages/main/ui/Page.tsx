import styles from "./styles.module.css";
import { useCallback, useEffect, useState } from "react";
import { Question } from "@/shared/interfaces";
import { fetchQuestions } from "@/api";
import QuestionsListWithPagination from "@/components/QuestionsListWithPagination/QuestionsListWithPagination";
import Filters from "@/components/Filters/Filters";
import { useAppSelector } from "@/app/appStore";
import { useLocation } from "react-router";

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
      {questions && (
        <QuestionsListWithPagination
          questions={questions}
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageClick={setCurrentPage}
        />
      )}
      <Filters />
    </div>
  );
};

export default MainPage;
