import styles from "./styles.module.css";
import { QuestionDetails, QuestionDetailsSkeleton } from "@/entities/question";
import QuestionInfoSection from "./QuestionInfoSection/QuestionInfoSection";
import { QuestionInfoSkeleton } from "@/features/question-info";
import { useCurrentQuestion } from "@/shared/hooks/useCurrentQuestion";
import { ErrorMessage } from "@/shared/ui";

const QuestionPage = () => {
  const { question, isLoading, isError } = useCurrentQuestion();

  if (isLoading) {
    return (
      <div className={styles.container}>
        <QuestionDetailsSkeleton />
        <QuestionInfoSkeleton />
      </div>
    );
  }

  if (isError || !question) return <ErrorMessage type="question" />;

  return (
    <div className={styles.container}>
      <QuestionDetails question={question} />
      <QuestionInfoSection />
    </div>
  );
};

export default QuestionPage;
