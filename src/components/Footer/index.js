import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>about us</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum facere fugiat quidem.
          </p>
        </div>
        <div className="box">
          <h3>branch locations</h3>
          <a href="#">india</a>
          <a href="#">USA</a>
          <a href="#">japan</a>
          <a href="#">france</a>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <a href="#home">home</a>
          <a href="#book">book</a>
          <a href="#packages">packages</a>
          <a href="#services">services</a>
          <a href="#gallery">gallery</a>
          <a href="#contact">contact</a>
        </div>
        <div className="box">
          <h3>follow us</h3>
          <a href="#">facebook</a>
          <a href="#">instagram</a>
          <a href="#">twitter</a>
          <a href="#">linkedin</a>
        </div>
      </div>
    </section>
  )
}

export default Footer