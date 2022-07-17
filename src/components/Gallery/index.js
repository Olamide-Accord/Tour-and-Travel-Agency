import React from 'react';
import { gallery } from '../../data';
import "./gallery.css"

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        <span>g</span>
        <span>a</span>
        <span>l</span>
        <span>l</span>
        <span>e</span>
        <span>r</span>
        <span>y</span>
      </h1>
      <div className="box-container">
        {gallery.map((item) => {
          const {id, img} = item;
          return <div className="box" key={id}>
            <img src={img} alt="beautiful places" />
            <div className="content">
              <h3>amazing places</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              </p>
              <a href="#" className="btn">see more</a>
            </div>
          </div>
        })}
      </div>
    </section>
  )
}

export default Gallery