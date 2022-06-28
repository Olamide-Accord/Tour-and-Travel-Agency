import React from 'react';
import "./home.css"
import vid1 from '../../assets/videos/vid-1.mp4'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>adventure is worthwhile</h3>
        <p>discover new places with us, adventure awaits.</p>
        <a href="#" className="btn">
          discover more
        </a>
      </div>

      <div className="video-container">
        <video loop autoPlay muted preload='auto'>
          <source src={vid1} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Home