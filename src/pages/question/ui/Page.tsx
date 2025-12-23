import { useLocation, useParams } from "react-router";
import styles from "./styles.module.css";
import { useGetQuestionByIdQuery } from "@/entities/question/api/questionApi";
import { memo, useMemo } from "react";
import ErrorMessage from "@/shared/ui/ErrorMessage/ErrorMessage";
import {
  QuestionDetailsSkeleton,
  QuestionInfoSkeleton,
  QuestionDetails,
  QuestionAdditionalInfo,
} from "@/features/questions";

const QuestionPage = memo(() => {
  const { id: questionId } = useParams();
  const { state: questionFromState } = useLocation();

  const {
    data: questionFromApi,
    isLoading,
    isError,
  } = useGetQuestionByIdQuery(Number(questionId), {
    skip: !questionId || questionFromState,
  });

  const question = useMemo(() => {
    return questionFromState || questionFromApi;
  }, [questionFromState, questionFromApi]);

  if (!questionFromState && isLoading) {
    return (
      <div className={styles.container}>
        <QuestionDetailsSkeleton />
        <QuestionInfoSkeleton />
      </div>
    );
  }

  if (isError && !questionFromState) return <ErrorMessage type="question" />;

  return (
    <div className={styles.container}>
      <QuestionDetails question={question} />
      <QuestionAdditionalInfo question={question} />
    </div>
  );
});

export default QuestionPage;
