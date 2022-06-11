/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function NavbarUser() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top custom-bg-navbar">
      <div className="container">
        <a href="#" className="font-weight-bold custom-font-title">Shohibun</a>
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
              className="nav-item nav-link ml-2 pl-3 pr-3 text-white font-weight-bold rounded custom-bg-nav-item custom-cursor"
              id="home"
            >
              Home
            </a>
            <a
              className="nav-item nav-link ml-2 pl-3 pr-3 custom-font-title custom-cursor"
              id="project"
            >
              Project
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
