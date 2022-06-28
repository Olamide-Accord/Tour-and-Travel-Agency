import React from "react";
import Book from "./components/Book";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Packages from "./components/Packages";
import Services from "./components/Services"

function App() {
  return (
    <div className="App">
      <Header/>
      <Book/>
      <Packages/>
      <Services/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
