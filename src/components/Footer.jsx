import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid">
      <div className="row bg-dark px-2">
        <div className="col-md-4"></div>
        <div className="col-md-1">
          <Link to={"https://github.com/Shohibun"}>
            <FontAwesomeIcon icon={"fa-brands fa-github"} />
          </Link>
        </div>
        <div className="col-md-1">
          <Link to={"https://www.linkedin.com/in/shohibun-najam-ilma-ab481b20b/"}>
            <FontAwesomeIcon icon={"fa-brands fa-linkedin"} />
          </Link>
        </div>
        <div className="col-md-1">
          <Link to={"https://www.instagram.com/shohibun.najam/"}>
            <FontAwesomeIcon icon={"fa-brands fa-instagram"} />
          </Link>
        </div>
        <div className="col-md-1">
          <Link to={"https://www.youtube.com/channel/UChSYdJ0IjOQRosi_qDhzQNw"}>
            <FontAwesomeIcon icon={"fa-brands fa-youtube"} />
          </Link>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="row customer-bg-footer">
        <div className="col-md-12">
          <p>Copyright 2022 | Made with "Shohibun"</p>
        </div>
      </div>
    </div>
  )
}
