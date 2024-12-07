import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Fetch the base URL from the environment variable
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUsersData: builder.query({
      query: () => 'users',
    }),
    getUserData: builder.query({
      query: (id) => `users/${id}`,
    }),
    
    }),
  });



export const { useGetUsersDataQuery, useGetUserDataQuery } = userApi;