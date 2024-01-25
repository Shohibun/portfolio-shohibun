import React from "react";
import { useMediaQuery } from "react-responsive";

export default function Jumbotron() {
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <section className="py-5 overflow-hidden">
      {isMobile ? (
        <div className="mt-5 d-flex justify-content-center">
          <div className="">
            <h3 className="custom-color-font">Hello I'm</h3>

            <h2 className="text-dark font-weight-bold">Shohibun Najam Ilma</h2>

            <p className="text-dark font-weight-bold">
              Front-End Web Developer
            </p>

            <p className="custom-font-size">
              I am a FrontEnd Web Developer with approximately one year of
              experience.
              <br />
              By using frontend libraries such as ReactJS and Flask Python.
            </p>

            <div className="row">
              <div className="col-4 text-right">
                <a
                  className="btn text-white custom-bg"
                  href="mailto:shohibunnajam@gmail.com"
                >
                  Contact Me
                </a>
              </div>

              <div className="col-8">
                <a
                  className="btn btn-light"
                  href={require("./CV_ShohibunNajamIlma_Fix.pdf")}
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-4 text-right custom-padding-top custom-bg-orange">
            <img
              className="custom-image-width custom-position-image"
              src={require("../images/user-2.png")}
              alt="User"
            />
          </div>
          <div className="col-md-8 pt-4 pl-5 my-5">
            <div className="pl-5 ml-5 pt-4">
              <h3 className="custom-color-font">Hello I'm</h3>

              <h2 className="text-dark font-weight-bold">
                Shohibun Najam Ilma
              </h2>

              <p className="text-dark font-weight-bold">
                Front-End Web Developer
              </p>

              <p className="custom-font-size">
                I am a FrontEnd Web Developer with approximately one year of
                experience.
                <br />
                By using frontend libraries such as ReactJS and Flask Python.
              </p>

              <div className="row">
                <div className="col-md-2 text-right">
                  <a
                    className="btn text-white custom-bg"
                    href="mailto:shohibunnajam@gmail.com"
                  >
                    Contact Me
                  </a>
                </div>

                <div className="col-md-3">
                  <a
                    className="btn btn-light"
                    href={require("./CV_ShohibunNajamIlma_Fix.pdf")}
                  >
                    Download CV
                  </a>
                </div>

                <div className="col-md-7"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
