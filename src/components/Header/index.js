import React, { useState } from 'react';
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa/index";
import {GrClose} from "react-icons/gr/index"
import { useGlobalContext } from '../../context';
import Home from "../Home";
import Login from '../Login';
import "./header.css"

const Header = () => {
  const {
    navbar,
    toggleNavbar,
    searchbar,
    openSearchbar,
    closeSearchbar,
    login,
    openLogin
  } = useGlobalContext()
  return (
    <>
      <header>
        <nav>
          <div id="menu-bar" onClick={toggleNavbar}>
            <FaBars className="icon" />
          </div>
          <a href="#" className="logo">
            <span>T</span>
            ravel
          </a>

          <div className={`${navbar ? "navbar active" : "navbar"}`}>
            <a href="#home">Home</a>
            <a href="#book">Book</a>
            <a href="#packages">Packages</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="icons">
            <FaSearch
              className={`${searchbar ? "icon-none" : "icon"}`}
              onClick={openSearchbar}
            />
            <FaTimes
              className={`${searchbar ? "icon" : "icon-none"}`}
              onClick={closeSearchbar}
            />
            <FaUser className="icon" onClick={openLogin} />
          </div>

          <form
            className={`${
              searchbar ? "search-bar-container active" : "search-bar-container"
            }`}>
            <input type="search" id="search-bar" placeholder="search here..." />
            <label htmlFor="search-bar">
              <FaSearch className="icon" />
            </label>
          </form>
        </nav>
      </header>
      {login && <Login />}
      <Home />
    </>
  );
}

export default Header;