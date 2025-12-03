import Wrapper from "../Wrapper/Wrapper";
import QuestionsList from "../QuestionsList/QuestionsList";
import Pagination from "../Pagination/Pagination";
import { Question } from "@/shared/interfaces";

interface Props {
  questions: Question[];
  pagesCount: number;
  currentPage: number;
  onPageClick: (page: number) => void;
}

const QuestionsListWithPagination = ({
  questions,
  pagesCount,
  currentPage,
  onPageClick,
}: Props) => {
  return (
    <Wrapper>
      <QuestionsList questions={questions} />
      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageClick={onPageClick}
      />
    </Wrapper>
  );
};

export default QuestionsListWithPagination;
