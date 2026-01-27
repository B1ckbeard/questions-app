import { QuestionsPagination } from "@/features/questions-pagination";
import { QuestionsList } from "@/widgets/questions";
import { Wrapper } from "@/shared/ui";

const QuestionsFeed = () => {
  return (
    <Wrapper>
      <QuestionsList />
      <QuestionsPagination />
    </Wrapper>
  );
};

export default QuestionsFeed;
