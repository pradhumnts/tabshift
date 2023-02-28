import logo from "./../../assets/logo.png";
import "./nav.css";
import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="logo-img">
          <div className="logo-wrapper">
            <img src={logo} alt="" />
          </div>
        </div>
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="services">Services</Link>
        <Link to="about-us">About Us</Link>
        <a href="mailto:contact@tabshift.io">
          <Button variant="contained" size="large">
            Contact
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Nav;
