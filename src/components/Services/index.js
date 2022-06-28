import React from 'react'
import "./services.css"
import { services } from '../../data'

const Services = () => {
  return (
    <section className="services" id="services">
      <h1 className="heading">
        <span>s</span>
        <span>e</span>
        <span>r</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span>s</span>
      </h1>
      <div className="box-container">
        {
          services.map((item) => {
            const {id, icon, heading} = item;
            return (
              <div className="box" key={id}>
                <i>{icon}</i>
                <h3>{heading}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore ratione consectetur culpa fugiat maiores temporibus
                  earum, deleniti aliquid suscipit quia repellat doloremque.
                </p>
              </div>
            );
          })
        }
      </div>
    </section>
  )
}

export default Services