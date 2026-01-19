import QuestionDetails from "./ui/QuestionDetails/QuestionDetails";
import QuestionDetailsSkeleton from "./ui/QuestionDetailsSkeleton/QuestionDetailsSkeleton";
import QuestionItem from "./ui/QuestionItem/QuestionItem";

export { QuestionDetails, QuestionDetailsSkeleton, QuestionItem };

export {
  useGetQuestionsQuery,
  useGetQuestionByIdQuery,
} from "./api/questionApi";

export type { Question } from "./model/types";
