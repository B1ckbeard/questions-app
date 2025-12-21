import { useLocation, useParams } from "react-router";
import styles from "./styles.module.css";
import QuestionDetails from "@/components/QuestionDetails/QuestionDetails";
import QuestionAdditionalInfo from "@/components/QuestionAdditionalInfo/QuestionAdditionalInfo";
import { useGetQuestionByIdQuery } from "@/app/questionsApi";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import QuestionDetailsSkeleton from "@/components/QuestionDetailsSkeleton/QuestionDetailsSkeleton";
import QuestionInfoSkeleton from "@/components/QuestionInfoSkeleton/QuestionInfoSkeleton";

const QuestionPage = () => {
  const { id: questionId } = useParams();
  const { state: questionFromState } = useLocation();

  const {
    data: questionFromApi,
    isLoading,
    isError,
  } = useGetQuestionByIdQuery(Number(questionId), {
    skip: !questionId || questionFromState,
  });

  const question = questionFromState || questionFromApi;

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
};

export default QuestionPage;
