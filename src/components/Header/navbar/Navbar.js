import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <section className="navbBar">
        <div className="container">
          <nav className="pt-4 navbar navbar-expand-lg navbar-dark bg-primary bg-transparent mb-5 ms-0">
            <div className="container-fluid ">
              <a className="navbar-brand text-white" href="\">
                <img src="\assets\images\logo.svg" alt="Logo" />
              </a>
              <button
                className="navbar-toggler collapsed d-flex d-lg-none  flex-column justify-content-around"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon top-bar"></span>
                <span className="toggler-icon middle-bar"></span>
                <span className="toggler-icon bottom-bar"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto me-4 px-3 mb-2 mb-lg-0 pt-3 ">
                  <li className="nav-item d-flex flex-column ">
                    <HashLink
                      className="nav-link"
                      aria-current="page"
                      to="/#idoverview"
                    >
                      Overview
                    </HashLink>
                  </li>
                  <li className="nav-item ">
                    <HashLink className="nav-link text-white" to="/#idvission">
                      Vision
                    </HashLink>
                  </li>
                  <li className="nav-item ">
                    <HashLink className="nav-link text-white" to="/#idstudio">
                      Studio
                    </HashLink>
                  </li>

                  <li className="nav-item ">
                    <button className="launch-app my-btn ">Launch App</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
