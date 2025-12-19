import Wrapper from "../Wrapper/Wrapper";
import QuestionsList from "../QuestionsList/QuestionsList";
import Pagination from "../Pagination/Pagination";
import { Question } from "@/shared/interfaces";

interface Props {
  questions: Question[];
}

const QuestionsListWithPagination = ({ questions }: Props) => {
  return (
    <Wrapper>
      <QuestionsList questions={questions} />
      <Pagination />
    </Wrapper>
  );
};

export default QuestionsListWithPagination;
