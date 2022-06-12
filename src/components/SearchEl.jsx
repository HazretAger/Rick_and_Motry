import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCharacters } from "../store/characterSlice";
import { useGetCharacterByNameQuery } from "../services/service";

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
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="searchTerm"
        value={value}
        placeholder="Search..."
        onChange={handleChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-filter"
        viewBox="0 0 16 16"
      >
        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
      </svg>
      <button type="submit" className="searchButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </form>
  );
};

export default SearchEl;
