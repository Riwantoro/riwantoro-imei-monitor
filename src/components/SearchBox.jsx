import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-box">
      <input 
        type="text" 
        value={query} 
        onChange={handleChange} 
        placeholder="Search by name or IMEI" 
      />
    </div>
  );
};

export default SearchBox;
