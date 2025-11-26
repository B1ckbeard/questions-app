import { useLocation, useParams } from "react-router";
import styles from "./styles.module.css";
import QuestionDetails from "@/components/QuestionDetails/QuestionDetails";
import QuestionAdditionalInfo from "@/components/QuestionAdditionalInfo/QuestionAdditionalInfo";

const QuestionPage = () => {
  const { id: questionId } = useParams();
  const { state: question } = useLocation();
  console.log(questionId, question);
  return (
    <div className={styles.container}>
      <QuestionDetails question={question} />
      <QuestionAdditionalInfo question={question} />
    </div>
  );
};

export default QuestionPage;
