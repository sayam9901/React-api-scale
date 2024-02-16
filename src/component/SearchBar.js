import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div style={{marginLeft:"20px"}}>
      Search Movie:{" "}
      <input
        type="text"
        placeholder="Search by movie title"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
