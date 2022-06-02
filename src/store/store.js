import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characterSlice";
import { rickAndMortyApi } from "../services/service";

export default configureStore({
  reducer: {
    character: characterReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});
