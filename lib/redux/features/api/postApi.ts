import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Fetch the base URL from the environment variable
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const postApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPostsData: builder.query({
      query: () => 'posts',
    }),

    editPostData: builder.mutation({
      query: ({id, data}) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body:data,
      }),
    }),

    deletePostData: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE'
      }),
    }),

    createPostData: builder.mutation({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
    }),
  }),
});


export const { useCreatePostDataMutation,useDeletePostDataMutation, useGetPostsDataQuery, useEditPostDataMutation } = postApi;