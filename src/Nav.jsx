import React from "react";
import { Link } from "react-router-dom";
import logo from "./resources/abc_logo.svg";
import "./Nav.css";

export default function Nav(props) {
  const { setBackground } = props;
  return (
    <div className="Nav">
      <div className="abc">
        <img src={logo} alt="logo" />
        <nav className="Industries-Services">
          <ul>
            <li>
              <Link
                className="Industries-Services-Link"
                to="/industries"
                onClick={() => setBackground("slide_one.jpg")}
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                className="Industries-Services-Link"
                to="/services"
                onClick={() => setBackground("slide_two.jpg")}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="Industries-Services-Link"
                to="/about-us"
                onClick={() => setBackground("slide_three.jpg")}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="Rectangle">
          <h4>Contact Us</h4>
        </div>
      </div>
    </div>
  );
}
