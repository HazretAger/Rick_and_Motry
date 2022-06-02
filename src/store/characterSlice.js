import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = characterSlice.actions;

export default characterSlice.reducer;
