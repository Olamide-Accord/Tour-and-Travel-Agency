import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useGlobalContext } from "./context";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup";


function App() {
  const {theme} = useGlobalContext()
  return (
    <div className="App" id={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="login/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
