import React from "react";

export default function Resume() {
  return (
    <div className="container">
      <h2 className="text-dark text-center font-weight-bold mt-5 pt-5">
        Resume
      </h2>
      <h4 className="text-dark text-center font-weight-bold">
        Summary &amp; Experience
      </h4>

      <div className="row">
        <div className="col-md-4">
          <ul className="timeline">
            <li>
              <h5 className="font-weight-bold text-dark">
                SHOHIBUN NAJAM ILMA
              </h5>
              <h6 className="font-weight-bold text-muted">
                FrontEnd Developer
              </h6>
              <p className="text-muted">
                I am a FrontEnd Developer with more than 6 months of experience.
                I use programming language like ReactJS and NextJS.
              </p>
            </li>
          </ul>
        </div>

        <div className="col-md-4">
          <ul className="timeline">
            <li>
              <h5 className="font-weight-bold text-dark">
                INFORMATICS STUDENT ASSOCIATION
              </h5>
              <h6 className="font-weight-bold text-muted">
                December 2021 - December 2022
              </h6>
              <p className="text-muted">Head Departement Public Realtions</p>
            </li>
            <li>
              <h5 className="font-weight-bold text-dark">
                FRONTEND JAVASCRIPT BINAR ACADEMY
              </h5>
              <h6 className="font-weight-bold text-muted">
                February 2022 - August 2022
              </h6>
              <p className="text-muted">Participant MBKM Frontend JavaScript in Binar Academy</p>
            </li>
          </ul>
        </div>

        <div className="col-md-4">
          <ul className="timeline">
            <li>
              <h5 className="font-weight-bold text-dark">
                INFORMATICS STUDENT ASSOCIATION
              </h5>
              <h6 className="font-weight-bold text-muted">
                December 2021 - December 2022
              </h6>
              <p className="text-muted">Staff Devision Public Realtions</p>
            </li>
            <li>
              <h5 className="font-weight-bold text-dark">
                INFORMATICS STUDENT ASSOCIATION
              </h5>
              <h6 className="font-weight-bold text-muted">
                December 2021 - December 2022
              </h6>
              <p className="text-muted">Staff Devision Public Realtions</p>
            </li>
            <li>
              <h5 className="font-weight-bold text-dark">
                FRONTEND WEB DEVELOPER CENTRAL AI
              </h5>
              <h6 className="font-weight-bold text-muted">
                August 2022 - December 2022
              </h6>
              <p className="text-muted">Frontend Intern At Central AI</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
