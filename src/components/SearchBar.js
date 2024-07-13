import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar productos..." onChange={onSearch} />
    </div>
  );
}

export default SearchBar;