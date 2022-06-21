import React from "react";

export default function Skill() {
  return (
    <div className="container">
      <div className="w-75 mx-auto">
        <h2 className="text-dark font-weight-bold text-center mt-5 pt-5">
          My Skills
        </h2>

        <p className="text-dark text-center">
          I have more than 6 months of experience as a Frontend Web Developer. I
          have also used various latest technologies such as ReactJS and NextJS.
        </p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <p className="text-dark">Python</p>
          <div className="progress">
            <div
              className="progress-bar custom-bar-1 custom-color-bar"
              role="progressbar"
              aria-valuenow="45"
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
              className="progress-bar custom-bar-2 custom-color-bar"
              role="progressbar"
              aria-valuenow="90"
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
              className="progress-bar custom-bar-2 custom-color-bar"
              role="progressbar"
              aria-valuenow="90"
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
              className="progress-bar custom-bar-3 custom-color-bar"
              role="progressbar"
              aria-valuenow="80"
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
              className="progress-bar custom-bar-4 custom-color-bar"
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
              className="progress-bar custom-bar-2 custom-color-bar"
              role="progressbar"
              aria-valuenow="90"
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
