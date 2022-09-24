import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-3 col-md-12 my-sm-0 mt-4">
            <a
              href="https://templatemo.com/live/templatemo_561_purple_buzz"
              target="_powerBy"
              className="text-white text-decoration-none fs-4"
            >
              <i className="fa-regular fa-building me-2"></i>
              Purple <span>Buzz</span>
            </a>
            <p className="my-lg-4 my-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <ul className="navbar-nav d-flex flex-row gap-3">
              <li className="nav-item">
                <a href="#" className="nav-link fs-2 text-white">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link fs-2 text-white">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link fs-2 text-white">
                  <i className="fa-brands fa-square-whatsapp"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link fs-2 text-white">
                  <i className="fa-brands fa-flickr"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link fs-2 text-white">
                  <i className="fa-brands fa-medium"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h3 className="h4 pb-lg-3 text-light">Our Company</h3>
            <ul className="list-unstyled text-light">
              <li className="pb-2">
                <i className="fa-solid fa-chevron-right me-2"></i>
                <Link to="/" className="text-decoration-none text-light">
                  Home
                </Link>
              </li>
              <li className="pb-2">
                <i className="fa-solid fa-chevron-right me-2"></i>
                <Link
                  to="/about"
                  className="text-decoration-none text-light py-1"
                >
                  About Us
                </Link>
              </li>
              <li className="pb-2">
                <i className="fa-solid fa-chevron-right me-2"></i>
                <Link
                  to="/work"
                  className="text-decoration-none text-light py-1"
                >
                  Work
                </Link>
              </li>
              <li className="pb-2">
                <i className="fa-solid fa-chevron-right me-2"></i>
                <Link
                  to="/pricing"
                  className="text-decoration-none text-light py-1"
                >
                  Price
                </Link>
              </li>
              <li className="pb-2">
                <i className="fa-solid fa-chevron-right me-2"></i>
                <Link
                  to="/contact"
                  className="text-decoration-none text-light py-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h3 className="h4 pb-lg-3 text-light">Our Works</h3>
            <ul className="list-unstyled text-light">
              <li className="pb-2">
                <i className="fa-solid fa-chevron-right me-2"></i>
                <a className="text-decoration-none text-light" href="#">
                  Branding
                </a>
              </li>
              <li className="pb-2">
                <i className="fa-solid fa-chevron-right me-2"></i>
                <a className="text-decoration-none text-light py-1" href="#">
                  Business
                </a>
              </li>
              <li className="pb-2">
                <i className="fa-solid fa-chevron-right me-2"></i>
                <a className="text-decoration-none text-light py-1" href="#">
                  Marketing
                </a>
              </li>
              <li className="pb-2">
                <i className="fa-solid fa-chevron-right me-2"></i>
                <a className="text-decoration-none text-light py-1" href="#">
                  Social Media
                </a>
              </li>
              <li className="pb-2">
                <i className="fa-solid fa-chevron-right me-2"></i>
                <a className="text-decoration-none text-light py-1" href="#">
                  Digital Solution
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h3 className="h4 pb-lg-3 text-light">For Client</h3>
            <ul className="list-unstyled text-light">
              <li className="pb-2">
                <i className="fa-regular fa-phone me-2"></i>
                <a className="text-decoration-none text-light" href="#">
                  010-020-0340
                </a>
              </li>
              <li className="pb-2">
                <i className="fa-solid fa-envelope me-2"></i>
                <a className="text-decoration-none text-light" href="#">
                  info@company.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_end">
        <div className="container">
          <div className="row pt-4">
            <div className="col-lg-6 col-sm-12">
              <p className="text-lg-start text-center text-light light-300">
                © Copyright 2021 Purple Buzz Company. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <p className="text-lg-end text-center text-light light-300">
                Designed by
                <a
                  rel="sponsored"
                  className="text-decoration-none text-light"
                  href="https://templatemo.com/"
                  target="_blank"
                >
                  <strong>TemplateMo</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
