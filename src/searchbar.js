import React from 'react';

const SearchBar = (props) => {
    return (
        <input 
            className="input-group-text" 
            type="text" 
            placeholder="Search your book"
            onKeyUp={props.handleSearch}
        />
    )
}

export default SearchBar;