import { useEffect, useState } from "react";
import { Question } from "@/shared/interfaces";
import { fetchQuestions } from "@/api";
import QuestionsListWithPagination from "@/components/QuestionsListWithPagination/QuestionsListWithPagination";

const MainPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const limit: number = 10;

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await fetchQuestions(currentPage, limit);
        setQuestions(data.data);
        setPagesCount(Math.ceil(data.total/limit));
      } catch (error) {
        console.log(error);
      }
    };
    getQuestions();
  }, [currentPage]);

  return (
    <>
      {questions && (
        <QuestionsListWithPagination
          questions={questions}
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageClick={setCurrentPage}
        />
      )}
    </>
  );
};

export default MainPage;
