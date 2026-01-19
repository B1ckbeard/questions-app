import { setPagesCount } from "@/features/questions-pagination/model/slice";
import { baseApi } from "@/shared/api/baseApi";

export const questionApi = baseApi.injectEndpoints({
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

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const limit = arg?.limit || 10;
          const total = data?.total || 0;
          const pagesCount = Math.ceil(total / limit);
          dispatch(setPagesCount(pagesCount));
        } catch (err) {
          console.error("Failed to calculate pages count:", err);
        }
      },
      providesTags: ["Questions"],
    }),

    getQuestionById: builder.query({
      query: (id: number) => `questions/public-questions/${id}`,
      providesTags: (id) => [{ type: "Question" as const, id }],
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
