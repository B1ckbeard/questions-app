import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = import.meta.env.VITE_QUESTIONS_BASE_API_URL as string;

export const skillApi = createApi({
  reducerPath: "skillApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["skills"],
  endpoints: (builder) => ({
    getSkills: builder.query({
      query: ({ page = 1, limit = 15 }) => `skills?page=${page}&limit=${limit}`,
      providesTags: ["skills"],
    }),
  }),
});

export const { useGetSkillsQuery } = skillApi;
