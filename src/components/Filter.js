import React from 'react';

const Filter = ({ filterText, filterRating, onFilterTextChange, onFilterRatingChange }) => {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        className="px-4 py-2 border rounded"
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRating}
        onChange={(e) => onFilterRatingChange(e.target.value)}
        className="px-4 py-2 border rounded"
        min="0"
        max="5"
      />
    </div>
  );
};

export default Filter;
