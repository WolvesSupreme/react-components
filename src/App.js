import React, { useState, useEffect } from "react";
import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";


import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"; // <- importamos la liberia
import { css } from '@emotion/react';

function App() {
  // Loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Styles - Loading
  const override = css`
  display: block;
  margin: 0 auto;
  padding-top: 900px;
  align-items:center;
  justify-content:center;
  background-color: #282828;
  width: 100%;
  height: 100vh;
  `;

  return (
    <>
      {loading ? (
        <ClimbingBoxLoader
        css={override}
        color={"#DFBA9F"} 
        loading={loading} 
        size={30} />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
