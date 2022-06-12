import React from "react";

export default function Skill() {
  return (
    <div className="container">
      <div className="w-75 mx-auto">
        <h2 className="text-dark font-weight-bold text-center mt-5 pt-5">
          About My Skills
        </h2>

        <p className="text-dark text-center">
          I have more than 2 years of experience as a Frontend Web Developer. I
          have also used various latest technologies such as ReactJS and NextJS.
        </p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <p className="text-dark">Python</p>
          <div className="progress">
            <div
              className="progress-bar w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              45%
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <p className="text-dark">HTML</p>
          <div className="progress">
            <div
              className="progress-bar w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <p className="text-dark">CSS</p>
          <div className="progress">
            <div
              className="progress-bar w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <p className="text-dark">JavaScript</p>
          <div className="progress">
            <div
              className="progress-bar w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <p className="text-dark">ReactJS</p>
          <div className="progress">
            <div
              className="progress-bar w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <p className="text-dark">Slicing Design</p>
          <div className="progress">
            <div
              className="progress-bar w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
