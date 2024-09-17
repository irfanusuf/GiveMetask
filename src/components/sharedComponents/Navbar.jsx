import React, { useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/web Title with logo.svg";
import { IoIosArrowDropdown } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { HiDotsVertical } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import profile_pic from "../../assets/bg.jpg";

const Navbar = ({ user, menuOpenClose, setShowMenu, showMenu }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [logoutMessage, setlogoutMessage] = useState("");

  const navigate = useNavigate();

  function opencloseSettings() {
    setShowSettings(!showSettings);
  }

  function handleLogout() {
    ///  change the logic to cookie mechanism
    setShowSettings(false);
    // setUser("");
    navigate("/");
    setlogoutMessage("Logged Out Succesfully!");
    setTimeout(() => {
      setlogoutMessage("");
    }, 5000);
  }

  return (
    <>
      <div className="navbar">
        <div
          className="menu"
          onClick={() => {
            setShowSettings(false);
          }}
        >
          <TiThMenu onClick={menuOpenClose} />

          <div
            className={
              showMenu
                ? "drop-down animate__animated animate__bounceInLeft"
                : " display-none animate__animated animate__backOutLeft  "
            }
          >
            <div className="close-btn">
              <IoClose onClick={menuOpenClose} />
            </div>
            <ul>
              <li onClick={menuOpenClose}>
                <Link to="/"> Home</Link>
              </li>
              <li onClick={menuOpenClose}>
                <Link to="/blogs"> Blogs</Link>
              </li>
              <li onClick={menuOpenClose}>
                <Link to="/courses"> Courses</Link>
              </li>
              <li onClick={menuOpenClose}>
                <Link to="/carrier"> Carrers</Link>
              </li>
              <li onClick={menuOpenClose}>
                <Link to="/contact"> Contact</Link>
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
            <Link to="/blogs"> Blogs</Link>
          </li>

          <li>
            <Link to="/courses"> Courses</Link>
          </li>
          <li>
            <Link to="/carrier"> Carrers</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
        </ul>

        {user !== "" ? (
          <div className="user" onClick={opencloseSettings}>
            <span>
              <img src={profile_pic} width={"30px"} alt="profile" />
            </span>
            <p>{user}</p>

            <div>{showSettings ? <IoClose /> : <IoIosArrowDropdown />}</div>

            <div className={showSettings ? "dropdown" : "display-none"}>
              <ul>
                <li onClick={handleLogout}>Logout</li>
                <hr></hr>
                <li
                  onClick={() => {
                    navigate("/user/profile");
                  }}
                >
                  Profile
                </li>

                <li   
                  onClick={() => {
                    navigate("/admin/dashboard");
                  }}>Admin</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="logout-message">
            {logoutMessage !== "" ? (
              <p>{logoutMessage}</p>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </div>
        )}

        {user !== "" ? (
          <div className="triple-dot" onClick={opencloseSettings}>
            <div>{showSettings ? <IoClose /> : <HiDotsVertical />}</div>

            <div className={showSettings ? "dropdown" : "display-none"}>
              <ul>
                <li>
                  <img src={profile_pic} alt="profile" />
                  <span>{user}</span>
                </li>
                <li onClick={handleLogout}>Logout</li>
                <li
                  onClick={() => {
                    navigate("/user/profile");
                  }}
                >
                  Profile
                </li>
                <li   
                  onClick={() => {
                    navigate("/admin/dashboard");
                  }}>Admin</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="logout-message2">
            {logoutMessage !== "" ? (
              <p>{logoutMessage}</p>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
