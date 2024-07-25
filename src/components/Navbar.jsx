import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
import { CiDatabase } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
        <li>
          <Link to="/services"> Services</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
        <li>
          <Link to="/blogs"> Blogs</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/signup" >
            {" "}
            Register
            <CiDatabase style={{  marginLeft: "10px", fontSize: "20px" , color : "red"}} />{" "}
          </Link>
        </li>
        <li>
          <Link to="/login" >
            Login
            <IoIosLogIn style={{ marginLeft: "10px", fontSize: "20px" ,color : "green"}} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
