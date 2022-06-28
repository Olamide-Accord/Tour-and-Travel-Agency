import React from 'react';
import { FaSearch, FaUser } from "react-icons/fa/index";
import Home from "../Home";
import "./header.css"

const Header = () => {

  return (
    <header>
      <nav>
        <a href="#" className='logo'>
          <span>T</span>
          ravel
        </a>

        <div className="navbar">
          <a href="#home">home</a>
          <a href="#book">Book</a>
          <a href="#packages">Packages</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="icons">
          <FaSearch className='icon'/>
          <FaUser className='icon'/>
        </div>
      </nav>

      <Home/>
    </header>
  );
}

export default Header