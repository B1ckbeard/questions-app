import { useGetQuestionsQuery } from "@/app/questionsApi";
import Wrapper from "../Wrapper/Wrapper";
import { useAppSelector } from "@/app/appStore";
import { useSearchParams } from "react-router";
import QuestionsSkeleton from "../QuestionsSkeleton/QuestionsSkeleton";
import QuestionsList from "../QuestionsList/QuestionsList";
import Pagination from "../Pagination/Pagination";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Questions = () => {
  const [searchParams] = useSearchParams();
  const { currentPage, pageLimit } = useAppSelector((state) => state.questions);

  const params = {
    page: currentPage,
    limit: pageLimit,
    filters: searchParams.toString(),
  };

  const {
    data: questionsData,
    isLoading,
    isError,
  } = useGetQuestionsQuery(params, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) return <QuestionsSkeleton />;

  if (isError) return <ErrorMessage />;

  return (
    <Wrapper>
      <QuestionsList questions={questionsData.data} />
      <Pagination />
    </Wrapper>
  );
};

export default Questions;
