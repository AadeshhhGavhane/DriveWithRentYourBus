import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import HowTo from "./components/pages/HowTo";
import SafetyOnTheRoad from "./components/pages/SafetyOnTheRoad";
import Contact from "./components/pages/Contact"
import Footer from "./components/Footer";

function App({ children }) {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/howto" element={<HowTo/>}/>
          <Route exact path ="/service" element={<SafetyOnTheRoad/>}/>
          <Route exact path ="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
      

    </>
  );
};

export default App;
