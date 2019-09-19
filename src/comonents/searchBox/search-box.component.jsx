import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div className="search-box">
            <input
                type="text"
                placeholder={placeholder}
                onChange={handleChange} 
            />
        </div>
    );
}
