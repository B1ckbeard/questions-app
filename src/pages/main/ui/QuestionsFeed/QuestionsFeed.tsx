import { useAppSelector } from "@/app/appStore";
import { useSearchParams } from "react-router";
import { useGetQuestionsQuery } from "@/entities/question";
import { Pagination } from "@/features/questions-pagination";
import { QuestionsList, QuestionsListSkeleton } from "@/widgets/questions";
import { ErrorMessage, Wrapper } from "@/shared/ui";

const QuestionsFeed = () => {
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

  if (isLoading) return <QuestionsListSkeleton />;

  if (isError) return <ErrorMessage />;

  return (
    <Wrapper>
      <QuestionsList questions={questionsData.data} />
      <Pagination />
    </Wrapper>
  );
};

export default QuestionsFeed;
