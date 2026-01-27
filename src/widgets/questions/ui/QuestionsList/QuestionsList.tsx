import { memo } from "react";
import styles from "./styles.module.css";
import {
  Question,
  QuestionItem,
  useGetQuestionsQuery,
} from "@/entities/question";
import { ButtonShowFilters, ErrorMessage } from "@/shared/ui";
import { useSearchParams } from "react-router";
import QuestionsListSkeleton from "../QuestionsListSkeleton/QuestionsListSkeleton";
import { useAppSelector } from "@/app/appStore";

const QuestionsList = memo(() => {
  const [searchParams] = useSearchParams();
  const { currentPage, pageLimit } = useAppSelector(
    (state) => state.pagination
  );

  const params = {
    page: currentPage,
    limit: pageLimit,
    filters: searchParams.toString(),
  };

  const {
    data: questions,
    isLoading,
    isError,
  } = useGetQuestionsQuery(params, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) return <QuestionsListSkeleton />;

  if (isError) return <ErrorMessage />;

  return (
    <div className={styles.questionsList}>
      <div className={styles.questionsHeader}>
        <h2 className={styles.title}>Вопросы</h2>
        <ButtonShowFilters type={"filters"} />
      </div>
      <hr className={styles.questionsHeaderHr} />
      {questions?.data.length > 0 ? (
        questions?.data.map((question: Question) => (
          <QuestionItem key={question.id} question={question} />
        ))
      ) : (
        <p className={styles.desciption}>
          К сожалению, по запросу ничего не найдено. Попробуйте изменить запрос
          или воспользуйтесь нашими категориями.
        </p>
      )}
    </div>
  );
});

export default QuestionsList;
