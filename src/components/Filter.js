
import React from 'react';

const Filter = ({ filterTitle, filterRating, onFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        value={filterTitle}
        onChange={(e) => onFilterChange(e.target.value, filterRating)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRating}
        onChange={(e) => onFilterChange(filterTitle, e.target.value)}
        min="1"
        max="10"
      />
    </div>
  );
};

export default Filter;
