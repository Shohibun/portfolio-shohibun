import React from "react";

export default function Contibuted() {
  return (
    <div className="container-fluid mt-5 custom-bg">
      <div className="w-75 mx-auto pt-5">
        <h2 className="text-dark font-weight-bold text-center">
          Have Contibuted On
        </h2>
        <p className="text-dark font-weight-bold text-center">
          For about 6 months I have contributed in the IT world, I have worked
          in various companies and organizations.
        </p>
      </div>

      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            className="w-50"
            src={require("../images/HMIF.png")}
            alt="HMIF"
          />
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={require("../images/central.png")}
            alt="Central AI"
            className="w-50"
          />
        </div>
      </div>
    </div>
  );
}
