import React from "react";

export const DogSearch = () => {
  return (
    <div>
      <div className="searchBar">
        <label>Name:</label>
        <input type="text" placeholder="Enter Dog Name Here"></input>
        <label>Breed:</label>
        <input type="text" placeholder="Enter Dog Breed Here"></input>
        <button type="submit">Search</button>
      </div>
    </div>
  );
};
