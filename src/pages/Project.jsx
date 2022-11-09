import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

export default function Project() {
  return (
    <div className="w-75 mt-4 mx-auto">
      <h2 className="text-dark font-weight-bold text-center mb-4 mt-5" id="id-project">
         Project
      </h2>

      <Carousel indicators={false}>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src={require("../images/Project.png")} />
            <Card.Body>
              <Card.Text>
                <h3 className="card-title text-dark font-weight-bold text-center">
                  Binar Car Rental
                </h3>
                <p className="card-text text-dark text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium eius vero sit quos assumenda harum illo ducimus
                  laboriosam eum! Tempora voluptate asperiores vel temporibus
                  beatae excepturi nihil iure aliquam aperiam mollitia
                  laudantium error exercitationem nemo labore, quam iusto a
                  illum, ab tenetur, ut totam quidem consectetur repellendus.
                  Vero, sint ut.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src={require("../images/Project_2.png")} />
            <Card.Body>
              <Card.Text>
                <h3 className="card-title text-dark font-weight-bold text-center">
                  Second Hand
                </h3>
                <p className="card-text text-dark text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium eius vero sit quos assumenda harum illo ducimus
                  laboriosam eum! Tempora voluptate asperiores vel temporibus
                  beatae excepturi nihil iure aliquam aperiam mollitia
                  laudantium error exercitationem nemo labore, quam iusto a
                  illum, ab tenetur, ut totam quidem consectetur repellendus.
                  Vero, sint ut.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src={require("../images/Project_3.png")} />
            <Card.Body>
              <Card.Text>
                <h3 className="card-title text-dark font-weight-bold text-center">
                  Central AI
                </h3>
                <p className="card-text text-dark text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium eius vero sit quos assumenda harum illo ducimus
                  laboriosam eum! Tempora voluptate asperiores vel temporibus
                  beatae excepturi nihil iure aliquam aperiam mollitia
                  laudantium error exercitationem nemo labore, quam iusto a
                  illum, ab tenetur, ut totam quidem consectetur repellendus.
                  Vero, sint ut.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
