import React from 'react';
import "./hero.css"
import vid2 from '../../assets/videos/vid-2.mp4'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="content">
        <h3>adventure is worthwhile</h3>
        <p>discover new places with us, adventure awaits.</p>
        <a href="#" className="btn">
          discover more
        </a>
      </div>

      <div className="video-container">
        <video loop autoPlay muted preload='auto'>
          <source src={vid2} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Hero