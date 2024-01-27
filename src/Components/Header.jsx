import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <button className="text-xl btn btn-ghost">Auth-Master</button>
        <Link className="text-xl btn btn-ghost" to="/">
          Home
        </Link>
        <Link className="text-xl btn btn-ghost" to="/login">
          Login
        </Link>
        <Link className="text-xl btn btn-ghost" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
