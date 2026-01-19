import { baseApi } from "@/shared/api/baseApi";

export const specializationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: "specializations",
        params: { page, limit },
      }),
      providesTags: ["Specializations"],
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationApi;
