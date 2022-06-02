import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rickAndMortyApi = createApi({
  reducerPath: "RickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getRandomCharacters: builder.query({
      query: (quantity) => `/character/${quantity}`,
    }),
    getCharacterByName: builder.query({
      query: (name) => `/character/?name=${name}`,
    }),
  }),
});

export const { useGetRandomCharactersQuery, useGetCharacterByNameQuery } =
  rickAndMortyApi;
