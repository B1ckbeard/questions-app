import { useGetQuestionsQuery } from "@/entities/question/api/questionApi";
import { useAppSelector } from "@/app/appStore";
import { useSearchParams } from "react-router";
import QuestionsSkeleton from "../QuestionsSkeleton/QuestionsSkeleton";
import QuestionsList from "../QuestionsList/QuestionsList";
import ErrorMessage from "@/shared/ui/ErrorMessage/ErrorMessage";
import { Pagination } from "@/features/pagination";
import Wrapper from "@/shared/ui/Wrapper/Wrapper";

const Questions = () => {
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
