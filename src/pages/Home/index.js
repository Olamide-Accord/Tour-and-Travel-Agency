import React from 'react'
import Book from '../../components/Book';
import Contact from "../../components/Contact";
import Footer from "../../components/Footer"
import Gallery from '../../components/Gallery';
import Hero from "../../components/Hero"
import Packages from '../../components/Packages';
import Services from '../../components/Services';

const Home = () => {
  return (
    <div>
      <Hero />
      <Book />
      <Packages />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home