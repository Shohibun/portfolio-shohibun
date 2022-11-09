import React from "react";

export default function About() {
  return (
    <div className="w-75 mx-auto py-4 px-5 custom-bg custom-radius">
      <h2 className="text-white font-weight-bold text-center mt-4">About Me</h2>

      <p className="text-white text-center">
        I am currently a final year informatics student at University of Jember
        and now I am running an Independent Study program [Kampus Merdeka] at
        Binar Academy as Frontend JavaScript. I have an interest in Frontend Website, I 
        am active in organizations, I can learn quickly
        and I can work with a team.
      </p>

      <div className="w-100 text-center">
        <a className="btn btn-light" href={require("./CV_ShohibunNajamIlma_Fix.pdf")}>
          Download CV
        </a>
      </div>
    </div>
  );
}
