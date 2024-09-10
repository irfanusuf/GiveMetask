import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import linkedIn from "../../assets/linked.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link to={"/carriers"}>Carriers</Link>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <h3>Social Media Links</h3>

          <ul>
            <li>
              <img src={facebook} alt="logo" />{" "}
              <a
                href="https://www.instagram.com/algoacademyofficial/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <img src={instagram} alt="logo" />{" "}
              <a
                href="https://www.instagram.com/algoacademyofficial/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <img src={linkedIn} alt="logo" />{" "}
              <a
                href="https://www.linkedin.com/company/algo-academy-io"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="legal">
          <h3>Legal Information</h3>
          <ul>
            <li>
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/courses"}> Terms of Service</Link>
            </li>
            <li>
              <Link to={"/carriers"}>User Agreement and Cookie Policy</Link>
            </li>
          </ul>
        </div>
        <div className="subscription">
          <h3>Subscription</h3>
          <h2>Stay Connected !</h2>
          <form>
            <input placeholder="Subscribe to Our NewsLetter!" type="email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-2">
        <p>All CopyRights Reserved 2024</p>
        <p>Algo Academy Pvt. Limited</p>
      </div>
    </>
  );
};

export default Footer;
