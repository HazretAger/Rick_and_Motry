import React, { useState } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { setCharacters } from "../../store/characterSlice";
import { useGetCharacterByNameQuery } from "../../services/service";

const SearchEl = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { data: searchedCharacters } = useGetCharacterByNameQuery(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { results } = searchedCharacters;
    dispatch(setCharacters(results));
  };

  return (
    <form onSubmit={handleSubmit} role="search">
      <label htmlFor="search">Search for characters</label>
      <input
        id="search"
        type="search"
        value={value}
        placeholder="Search..."
        autoFocus
        required
        onChange={handleChange}
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default SearchEl;
