import React from "react";

export const NavBar = () => {
  return (
    <div className="topPart">
      <nav>
        <ul className="navBar">
          <a id="home" href="/">
            HOME{" "}
          </a>
          <a id="form" href="/form">
            {" "}
            SUBMISSION FORM
          </a>
        </ul>
      </nav>
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
