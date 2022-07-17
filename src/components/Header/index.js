import React from 'react';
import {Link} from "react-router-dom"
import { FaMoon, FaUser, FaBars, FaSun } from "react-icons/fa/index";
import { useGlobalContext } from '../../context';
import "./header.css"

const Header = () => {
  const {
    navbar,
    toggleNavbar,
    toggleTheme,
    theme
  } = useGlobalContext();
  return (
    <>
      <header>
        <nav>
          <div id="menu-bar" onClick={toggleNavbar}>
            <FaBars className="icon" />
          </div>
          <Link to="/" className="logo">
            <span>T</span>
            ravel
          </Link>

          <div className={`${navbar ? "navbar active" : "navbar"}`}>
            <Link to="/">Home</Link>
            <a href="#book">Book</a>
            <a href="#packages">Packages</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="icons">
            {theme === "light" ? (
              <FaMoon className="icon" onClick={toggleTheme} />
            ) : (
              <FaSun className="icon" onClick={toggleTheme} />
            )}
            <Link to="login">
              <FaUser className="icon" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;