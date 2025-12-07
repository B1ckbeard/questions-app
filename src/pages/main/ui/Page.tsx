import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Question } from "@/shared/interfaces";
import { fetchQuestions } from "@/api";
import QuestionsListWithPagination from "@/components/QuestionsListWithPagination/QuestionsListWithPagination";
import Filters from "@/components/Filters/Filters";
import { useAppSelector } from "@/app/appStore";

const MainPage = () => {
  const { filters, search } = useAppSelector((state) => state.questions);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const limit: number = 10;

  useEffect(() => {
    const getQuestions = async () => {
      fetchQuestions(currentPage, limit, filters, search)
        .then((data) => {
          setQuestions(data.data);
          setPagesCount(Math.ceil(data.total / limit));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getQuestions();
  }, [currentPage, filters, search]);

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
