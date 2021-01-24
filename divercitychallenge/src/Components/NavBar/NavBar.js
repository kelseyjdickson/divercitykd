import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div>
      <ul className="nav">
        <Link to="/" exact>
          Home
        </Link>
        <Link to="/register">Register</Link>
        <Link to="/login" className="nav__login">
          Login
        </Link>
        <Link to="/jobs" className="nav__jobs">
          Jobs
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
