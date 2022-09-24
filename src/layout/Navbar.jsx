import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light shadow">
        <div className="container">
          <a
            href="https://templatemo.com/live/templatemo_561_purple_buzz"
            target="_powerBy"
            className="navbar-brand text-dark"
          >
            <i className="fa-regular fa-building text-dark me-2"></i>
            Purple <span>Buzz</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/work" className="nav-link">
                  Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pricing" className="nav-link">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <div className="right-icon">
                <a href="#">
                  <i className="fa-regular fa-bell"></i>
                </a>
                <a href="#">
                  <i className="fas fa-cog"></i>
                </a>
                <a href="#">
                  <i className="far fa-user"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
