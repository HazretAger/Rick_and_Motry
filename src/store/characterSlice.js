import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  characters: [],
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    replaceSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { replaceSearchValue } = characterSlice.actions;

export default characterSlice.reducer;
