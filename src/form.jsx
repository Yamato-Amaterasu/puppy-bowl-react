import React from "react";

export const FormDisplay = () => {
  return (
    <div className="dogForm">
      <label>ID:</label>
      <input type="text" placeholder="Enter Dog ID Here"></input>
      <label>Name:</label>
      <input type="text" placeholder="Enter Dog Name Here"></input>
      <label>Breed:</label>
      <input type="text" placeholder="Enter Dog breed Here"></input>
      <label>Status:</label>
      <input type="text" placeholder="Enter Dog Status Here"></input>
      <label>Picture:</label>
      <input type="text" placeholder="Enter Dog Image URl Here"></input>

      <button type="submit">Submit</button>
    </div>
  );
};
