import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://eco-notes-server-site.vercel.app",
  }),
  tagTypes: ["blog"],
  endpoints: () => ({}),
});
