import React from "react";
import { Link } from "react-router-dom";

export default function Jumbotron() {
  return (
    <section className="py-5 overflow-hidden">
      <div className="row">
        <div className="col-md-4 custom-padding-top text-right custom-bg-orange">
          <img
            className="custom-image-width custom-position-image"
            src={require("../images/user.png")}
            alt="User"
          />
        </div>

        <div className="col-md-8 pt-4 pl-5 my-5">
          <div className="pl-5 ml-5 pt-4">
          <h3 className="custom-color-font">Hello I'm</h3>

          <h2 className="text-dark font-weight-bold">Shohibun Najam Ilma</h2>

          <p className="text-dark font-weight-bold">Front-End Web Developer</p>

          <p>
            I am a frontend web developer with more than 6 months of experience. 
            <br/>
            I use Frontend libraries like ReactJS, NextJS and Flask Python.
          </p>

          <Link className="btn text-white custom-bg" to={"#"}>
            Contact Me
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
