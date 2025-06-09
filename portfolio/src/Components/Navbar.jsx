import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavbarPage() {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Sanjay Dasari
        </Link>
          
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  className={({ isActive }) => 
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarPage;