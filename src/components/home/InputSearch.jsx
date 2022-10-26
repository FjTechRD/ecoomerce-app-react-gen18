import React from "react";

const InputSearch = ({ inputText, setInputText }) => {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <input
      className="search__input"
      value={inputText}
      onChange={handleChange}
      type="text"
      id="inputSearch"
      placeholder="Search for your articles.."
    />
  );
};

export default InputSearch;
