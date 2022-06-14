import React, { useState } from "react";
import "./index.scss";
import { useLazyGetCharactersQuery } from "../../services/service";
import { useDispatch } from "react-redux";
import { setCharacters } from "../../store/characterSlice";

const SearchEl = () => {
  const [value, setValue] = useState("");
  const [getSearchCharacter] = useLazyGetCharactersQuery(value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSearchCharacter(value);
    dispatch(setCharacters(data));
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
