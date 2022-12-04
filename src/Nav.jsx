import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="topPart">
      <nav>
        <ul className="navBar">
          <Link to="/" id="home">
            HOME
          </Link>

          <Link to="/form" id="form">
            SUBMISSION FORM
          </Link>
        </ul>
      </nav>
    </div>
  );
};
