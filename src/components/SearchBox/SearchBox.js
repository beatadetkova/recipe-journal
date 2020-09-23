import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--black bg-white br-pill shadow-5 outline-0"
        type="search"
        placeholder="search meal"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
