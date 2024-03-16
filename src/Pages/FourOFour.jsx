import React from "react";
import { Link } from "react-router-dom";
import "./FourOFour.css";


const FourOFour = () => {
  return (
    <div className="four-o-four-container">
    <div className="four-o-four-content">
      <h1 className="four-o-four-title">Sorry, that page was not found</h1>
      <p className="four-o-four-text">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <Link to="/" className="four-o-four-link">
        Go back to Home
      </Link>
    </div>
  </div>
  );
};

export default FourOFour;
