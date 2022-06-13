import React, { useState } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../store/characterSlice";

const SearchEl = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(value));
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
