import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
import { CiDatabase } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";
import logo from "../assets/web Title with logo.svg";


const Navbar = () => {
  return (
    <>
     
        <div className="navbar">
          <img src={logo} alt="logo here" />

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

          <div className="link-btn">
            <Link to="/signup">
              Register
              <CiDatabase/>
            </Link>

            <Link className="login-link" to="/login">
              Login
              <IoIosLogIn/>
            </Link>
          </div>
        </div>
  
    </>
  );
};

export default Navbar;
