import React from "react";
import { Link } from "react-router-dom";

function NavbarPage() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">

        <div className="container-fluid container">
          <Link className="navbar-brand" to="/">Sanjay Dasari</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/resume">Resume</Link>
              <Link className="nav-link" to="/projects">Projects</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarPage;
