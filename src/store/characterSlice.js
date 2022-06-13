import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: null,
  searchValue: "",
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCharacters, setSearchValue } = characterSlice.actions;

export default characterSlice.reducer;
