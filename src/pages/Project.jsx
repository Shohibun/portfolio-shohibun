import React from "react";

export default function Project() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card custom-card">
            <img
              className="mt-2 mb-3 w-100"
              src={require("../images/Project.png")}
              alt="Binar Car Rental"
            />
            <div className="card-body">
              <h5 className="card-title text-dark font-weight-bold text-center">
                Binar Car Rental
              </h5>
              <p className="card-text text-dark text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, cumque?.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card custom-card">
            <img
              className="mt-2 mb-3 w-100"
              src={require("../images/Project.png")}
              alt="Binar Car Rental"
            />
            <div className="card-body">
              <h5 className="card-title text-dark font-weight-bold text-center">
                Binar Car Rental
              </h5>
              <p className="card-text text-dark text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, cumque?.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card custom-card">
            <img
              className="mt-2 mb-3 w-100"
              src={require("../images/Project.png")}
              alt="Binar Car Rental"
            />
            <div className="card-body">
              <h5 className="card-title text-dark font-weight-bold text-center">
                Binar Car Rental
              </h5>
              <p className="card-text text-dark text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, cumque?.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
