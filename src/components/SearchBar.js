import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search for products"
            onChange={onSearch}
        />
    );
};

export default SearchBar;