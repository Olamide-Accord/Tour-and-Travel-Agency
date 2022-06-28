import React from 'react'
import {packages} from "../../data.js"
import { FaMap, FaStar, FaRegStar } from "react-icons/fa/index";
import "./packages.css"

const Packages = () => {
  return (
    <section className="packages" id="packages">
      <h1 className="heading">
        <span>p</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
        <span>a</span>
        <span>g</span>
        <span>e</span>
        <span>s</span>
      </h1>
      <div className="box-container">
        {
          packages.map((item) => {
            const {id, place, img} = item;
            return <div className="box" key={id}>
              <img src={img} alt={place} />
              <div className="content">
                <h3>
                  <FaMap className="icon" />
                  {place}
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nobis tenetur ullam.
                </p>
                <div className="stars">
                  <FaStar className="icon"/>
                  <FaStar className="icon"/>
                  <FaStar className="icon"/>
                  <FaStar className="icon"/>
                  <FaRegStar className="icon"/>
                </div>
                <div className="price">
                  $90.00 <span>$120.00</span>
                </div>
                <a href="#" className="btn">book now</a>
              </div>
            </div>
          })
        }
      </div>
    </section>
  )
}

export default Packages