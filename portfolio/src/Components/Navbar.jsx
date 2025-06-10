import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavbarPage() {
  const closeMobileMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); 
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        
        <Link className="navbar-brand" to="/">
          Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            {["/", "/about", "/resume", "/projects", "/contact"].map((path, idx) => {
              const names = ["Home", "About", "Resume", "Projects", "Contact"];
              return (
                <li className="nav-item" key={path}>
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    exact={path === "/"}
                    to={path}
                    onClick={closeMobileMenu} 
                  >
                    {names[idx]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarPage;
