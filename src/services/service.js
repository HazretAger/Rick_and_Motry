import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rickAndMortyApi = createApi({
  reducerPath: "RickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (value) =>
        `/character/${
          value.length === 0 ? [1, 82, 43, 45, 56, 23] : `?name=${value}`
        }`,
    }),
  }),
});

export const { useGetCharactersQuery } = rickAndMortyApi;
