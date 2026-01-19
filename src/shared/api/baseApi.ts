import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_QUESTIONS_BASE_API_URL as string;

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Question", "Questions", "Skills", "Specializations"],
  endpoints: () => ({}),
});
