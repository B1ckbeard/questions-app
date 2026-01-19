import { skipToken } from "@reduxjs/toolkit/query";
import { useLocation, useParams } from "react-router";
import { useGetQuestionByIdQuery } from "@/entities/question";

export const useCurrentQuestion = () => {
  const { id } = useParams();
  const { state: questionFromState } = useLocation();
  const questionId = Number(id);

  const {
    data: questionFromApi,
    isLoading,
    isError,
    error,
  } = useGetQuestionByIdQuery(questionId ? questionId : skipToken, {
    skip: !questionId,
  });

  const question = questionFromState || questionFromApi;

  return {
    question,
    isLoading: isLoading && !questionFromState,
    isError: isError && !questionFromState,
    error,
  };
};
