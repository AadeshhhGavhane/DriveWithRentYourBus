import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { loginWithRedirect, user, isAuthenticated, logout} = useAuth0();
  return (
    <>
      <section classNameName="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Drive
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active navbar-light" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navbar-light" to="/howto">
                    How To?
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navbar-light" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              {isAuthenticated && (
                <Link className="nav-link navbar-light" to="/dashboard">
                  Dashboard
                </Link>
              )}
              {isAuthenticated ? (
                <li>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </button>
                </li>
                ):(
                  <li>
                  <button onClick = {() => loginWithRedirect()}>
                    Log In
                  </button>
                  </li>
              )}
               
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
