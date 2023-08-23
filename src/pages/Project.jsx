import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

export default function Project() {
  return (
    <div className="w-75 mt-4 mx-auto">
      <h2
        className="text-dark font-weight-bold text-center mb-4 mt-5"
        id="id-project"
      >
        Project
      </h2>

      <Carousel indicators={false}>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={require("../images/Project.png")}
                />
                <Card.Body>
                  <Card.Text>
                    <h3 className="card-title text-dark font-weight-bold text-center">
                      Binar Car Rental
                    </h3>
                    <p className="card-text text-dark text-center">
                      Binar-Car is a website that aims to make car rental transactions.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={require("../images/Project_2.png")}
                />
                <Card.Body>
                  <Card.Text>
                    <h3 className="card-title text-dark font-weight-bold text-center">
                      Second Hand
                    </h3>
                    <p className="card-text text-dark text-center">
                      Second Hand is a wesbite that aims to make goods purchase transactions.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={require("../images/Project_3.png")}
                />
                <Card.Body>
                  <Card.Text>
                    <h3 className="card-title text-dark font-weight-bold text-center">
                      Central AI
                    </h3>
                    <p className="card-text text-dark text-center">
                      Central AI is a digital startup that focuses on helping services fast and effective for MSMEs.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={require("../images/Project_4.png")}
                />
                <Card.Body>
                  <Card.Text>
                    <h3 className="card-title text-dark font-weight-bold text-center">
                      Green Care Blitz
                    </h3>
                    <p className="card-text text-dark text-center">
                      Green Care Blitz Template is a website that aims to be used as a template.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={require("../images/Project_5.png")}
                />
                <Card.Body>
                  <Card.Text>
                    <h3 className="card-title text-dark font-weight-bold text-center">
                      POS Central AI
                    </h3>
                    <p className="card-text text-dark text-center">
                      POS is a website that aims to get the convenience of having a complete point of sale record that is free of charge without time limits for use.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={require("../images/Project_6.png")}
                />
                <Card.Body>
                  <Card.Text>
                    <h3 className="card-title text-dark font-weight-bold text-center">
                      PWA | Central AI
                    </h3>
                    <p className="card-text text-dark text-center">
                      PWA | Central AI is a website that is almost the same as the main web only the size is different.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
