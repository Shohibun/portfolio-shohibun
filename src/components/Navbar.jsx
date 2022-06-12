/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
      <div className="container">
        <a href="#" className="font-weight-bold custom-font-title custom-font-title-u">Shohibun Najam</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a
              className="nav-item nav-link ml-2 pl-3 pr-3 font-weight-bold rounded custom-font-color-nav custom-cursor"
              id="home"
            >
              Home
            </a>
            <a
              className="nav-item nav-link ml-2 pl-3 pr-3 font-weight-bold custom-font custom-cursor"
              id="project"
            >
              Project
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
