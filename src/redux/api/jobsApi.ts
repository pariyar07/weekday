import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getJobsApi = createApi({
  reducerPath: 'getJobsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/gists/',
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/vnd.github+json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    jobs: builder.query({
      query: () => '1733c9cec2aebde6ecd5bef8b906a690',
    }),
  }),
});

export const { useJobsQuery } = getJobsApi;
