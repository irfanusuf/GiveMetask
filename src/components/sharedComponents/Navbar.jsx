import React, { useEffect, useState } from "react";
import "../../styles/Navbar.scss";
import { Link } from "react-router-dom";
import { CiDatabase } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";
import logo from "../../assets/web Title with logo.svg";
import axios from "axios";
import { FaUserTie } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { HiDotsVertical } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = (props) => {
  const [user, setUser] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  function menuOpenClose (){
    setShowMenu(!showMenu)

  }
  

  const getUserData = async () => {
    try {
      const baseUrl = "http://localhost:4000";
      const token = localStorage.getItem("token");
      const res = await axios.get(`${baseUrl}/user/getUser/${token}`);

      setUser(res.data.email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [props.change]);

  return (
    <>
      <div className="navbar">
        <div className="menu">
          <TiThMenu onClick={menuOpenClose}/>

          <div className={showMenu ? "drop-down" : "display-none"} >
            <div className="close-btn"><IoClose onClick={menuOpenClose} /></div>
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
          </div>
        </div>

        <img src={logo} alt="logo here" />

        <ul className="ul">
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

        <div className="user">
          <span>
            <FaUserTie />
          </span>
          <p>{user}</p>
          <div>
            <IoIosArrowDropdown />
          </div>
        </div>

        <div className="triple-dot">
          <HiDotsVertical />
        </div>

        {/* <div className="link-btn">
          <Link to="/signup">
            Register
            <CiDatabase />
          </Link>

          <Link className="login-link" to="/login">
            Login
            <IoIosLogIn />
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
