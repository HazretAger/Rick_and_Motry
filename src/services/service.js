import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rickAndMortyApi = createApi({
  reducerPath: "RickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (value = null) =>
        `/character/${
          value === null ? [1, 82, 43, 45, 56, 23] : `?name=${value}`
        }`,
    }),
  }),
});

export const { useGetCharactersQuery, useLazyGetCharactersQuery } =
  rickAndMortyApi;
