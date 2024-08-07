import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Write Blogs</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
