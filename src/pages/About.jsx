import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-75 mx-auto py-4 px-5 custom-bg custom-radius">
      <h2 className="text-dark font-weight-bold text-center mt-4">About Me</h2>

      <p className="text-dark text-center">
        I am currently a final year informatics student at University of Jember
        and now I am running an Independent Study program [Kampus Merdeka] at
        Binar Academy as UI/UX Research and Design. I have an interest in UI/UX
        Research and Design, I am active in organizations, I can learn quickly
        and I can work with a team.
      </p>

      <div className="w-100 text-center">
        <Link className="btn btn-light" to={"#"}>
          Download CV
        </Link>
      </div>
    </div>
  );
}
