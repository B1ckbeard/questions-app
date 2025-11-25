import { useEffect, useState } from "react";
import { Question } from "@/shared/interfaces";
import { fetchQuestions } from "@/api";
import QuestionsList from "@/components/QuestionsList/QuestionsList";

const MainPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await fetchQuestions();
        setQuestions(data);
      } catch (error) {
        console.log(error);
      }
    };
    getQuestions();
  }, []);

  return <>{questions && <QuestionsList questions={questions} />}</>;
};

export default MainPage;
