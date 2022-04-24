import React from "react";
import "../Styles/navbar.css";
import warta from "../assets/warta.jpg";

function NavBar() {
  return (
    <div className="navbarContainer">
      <h1 className="navbarTitle">Edvora</h1>
      <div className="userDetail">
        <h4 className="userName">Druve Singh</h4>
        <img
          src={warta}
          alt="Logo"
          style={{ width: "50px", height: "50px" }}
          className="userImage"
        />
      </div>
    </div>
  );
}

export default NavBar;
