import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCharacters: {
    info: null,
    results: null,
  },
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.currentCharacters = action.payload;
    },
  },
});

export const { setCharacters, setSearchValue } = characterSlice.actions;

export default characterSlice.reducer;
