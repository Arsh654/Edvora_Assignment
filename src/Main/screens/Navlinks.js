import React from "react";
import "../Styles/Navlinks.css";
import { Link } from "react-router-dom";

function Navlinks() {
  return (
    <div className="LinksContainer">
      <Link to="/" className="Links">
        Nearest rides
      </Link>
      <Link to="upcomingrides" className="Links">
        Upcoming rides
      </Link>
      <Link to="pastrides" className="Links">
        Past rides
      </Link>
    </div>
  );
}

export default Navlinks;
