import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = import.meta.env.VITE_QUESTIONS_BASE_API_URL as string;

export const specializationsApi = createApi({
  reducerPath: "specializationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["specializations"],
  endpoints: (builder) => ({
    getSpecializations: builder.query({
      query: ({ page = 1, limit = 10 }) =>
        `specializations?page=${page}&limit=${limit}`,
      providesTags: ["specializations"],
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
