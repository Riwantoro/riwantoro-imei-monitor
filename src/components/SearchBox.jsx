import React from "react";

const SearchBox = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value); // Trigger search when input changes
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search by name..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
