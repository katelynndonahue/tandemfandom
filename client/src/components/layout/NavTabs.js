import React from "react";

import { Link } from "react-router-dom";
import "../assets/Nav.css";
import logo from "../images/TFLogo.svg";

function NavTabs() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3">
      <a className="navbar-brand" href="#"><img src={logo} alt="Tandem Fandom"/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" idName="navbarNav">
    <ul className="navbar-nav mr-auto">
     
      <li className="nav-item">
        <Link className="navbar-brand" to="/Profile">
          Profile
        </Link>
      </li>

      <li className="nav-item">
        <Link className="navbar-brand" to="/Matches">
          Matches
        </Link>
      </li>

      <li className="nav-item">
        <Link className="navbar-brand" to="/Login">
          Login
        </Link>
      </li>

      <li className="nav-item">
        <Link className="navbar-brand" to="/Signup">
          Signup
        </Link>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default NavTabs;
