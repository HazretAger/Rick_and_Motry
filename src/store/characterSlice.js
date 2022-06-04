import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: null,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const { setCharacters } = characterSlice.actions;

export default characterSlice.reducer;
