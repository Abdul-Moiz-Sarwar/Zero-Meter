import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery.trim());
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
