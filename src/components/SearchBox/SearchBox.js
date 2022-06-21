import React from 'react';
import './SearchBox.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = ({ placeholder, searchChange }) => {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={searchChange} />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default SearchBox;