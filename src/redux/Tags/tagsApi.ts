import { api } from "../api/apiSlice";

const tagsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query({
      query: () => "/popular-tags",
    }),
    getSingleTags: builder.query({
      query: (id) => `/single-blog/${id}`,
    }),
  }),
});

export const { useGetTagsQuery, useGetSingleTagsQuery } = tagsApi;
