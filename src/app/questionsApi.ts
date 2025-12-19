import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = import.meta.env.VITE_QUESTIONS_BASE_API_URL as string;

export const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["questions"],
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: (params) => {
        const { page = 1, limit = 10, filters = "" } = params || {};

        const queryParams = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        });
        if (filters) {
          const filterParams = new URLSearchParams(filters);
          filterParams.forEach((value, key) => {
            queryParams.append(key, value);
          });
        }
        return {
          url: `questions/public-questions`,
          params: Object.fromEntries(queryParams),
        };
      },
      providesTags: ["questions"],
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
