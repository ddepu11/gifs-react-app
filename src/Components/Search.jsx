import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";

function Search() {
  const { setTerm } = useGlobalContext();
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm(keyword);
  };

  return (
    <form className="search_form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for sticker"
        value={keyword}
        onChange={handleChange}
      />

      <button type="submit">Search</button>
    </form>
  );
}
export default Search;
