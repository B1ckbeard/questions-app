import { baseApi } from "@/shared/api/baseApi";

export const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query({
      query: ({ page = 1, limit = 15 }) => ({
        url: "skills",
        params: { page, limit },
      }),
      providesTags: ["Skills"],
    }),
  }),
});

export const { useGetSkillsQuery } = skillApi;
