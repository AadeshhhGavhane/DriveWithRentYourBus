import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./navbar";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home"
function App({ children }) {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/about" element={<Aboutus/>}/>
          <Route exact path ="/service" element={<Services/>}/>
          <Route exact path ="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
      

    </>
  );
};

export default App;
