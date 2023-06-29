import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HowTo from "./components/pages/HowTo";
import SafetyOnTheRoad from "./components/pages/SafetyOnTheRoad";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Dashboard from "./components/pages/Dashboard";
import GetStarted from "./components/pages/GetStarted";

function App({ children }) {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howto" element={<HowTo />} />
          <Route path="/service" element={<SafetyOnTheRoad />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/getstarted" element={<GetStarted />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
