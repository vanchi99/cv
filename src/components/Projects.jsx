import { Carousel, Col, Row } from "react-bootstrap";
import { Title } from "./Titles";
import GATO from "../assets/Tic-Tac.png";
import STORE from "../assets/Store.png";
import WORKOUT from "../assets/Workout.png";

let projects = [
  {
    src: GATO,
    alt: "Tic-Tac-Toe",
    h5: "Tic-Tac-Toe",
    p: "Functional Tic-Tac-Toe Game with improvements.",
    features: ["Movement history", "Play messages", "Game status"],
    tech: "Made with React, occupying state and props to perform the functionality. The design is made with the Bootstrap framework.",
    link: "https://www.google.com/",
  },
  {
    src: STORE,
    alt: "Store",
    h5: "Store inventory",
    p: "Inventory Disign for a Store.",
    features: ["List of products", "Manage non-stock products", "Bar Search"],
    tech: "Made with React, occupying state and props to perform the functionality. The design is made with the Bootstrap framework.",
    link: "https://www.google.com/",
  },
  {
    src: WORKOUT,
    alt: "Workout Control",
    h5: "Workout Control",
    p: "Program to save the progress of your exercises in the gym.",
    features: ["Database", "History", ""],
    tech: "Made with React, occupying state and props to perform the functionality. The design is made with the Bootstrap framework. Supabase is used to the back-end.",
    link: "https://www.google.com/",
  },
];
function Projects({ id }) {
  let rend = [];
  projects.forEach((e) => {
    let lis = e.features.map((i, ind) => {
      return <li key={ind}>{i}</li>;
    });
    let tmp = (
      <Carousel.Item key={e.alt}>
        <Row>
          <Col className="text-center">
            <a href={e.link} target="_blank" className="link-carousel">
              <h5 className="subtitle">
                <b>{e.h5}</b>
              </h5>
              <p>{e.p}</p>
              <img
                className="d-block w-100"
                style={{ borderRadius: "10px" }}
                src={e.src}
                alt={e.alt}
              />
            </a>
          </Col>
        </Row>
        <Row className="mt-3 pb-3 justify-content-center text-center">
          <Col xs={11} sm={4}>
            <h6 className="subtitle">Features: </h6>
            <ul className="list-features">{lis}</ul>
          </Col>
          <Col xs={11} sm={7}>
            <h6 className="subtitle">Technologies: </h6>
            {e.tech}
          </Col>
        </Row>
      </Carousel.Item>
    );
    rend.push(tmp);
  });

  return (
    <Row id={id} className="mt-3 justify-content-center">
      <Col
        xs={11}
        sm={12}
        className="asside-light"
        style={{ borderRadius: "10px" }}
      >
        <Title title="Personal Projects" />
        <Carousel variant="dark" className="mt-3">
          {rend}
        </Carousel>
      </Col>
    </Row>
  );
}

export default Projects;
