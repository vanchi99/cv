import { Col, Row } from "react-bootstrap";
import { Title } from "./Titles";

function About({ id }) {
  return (
    <Row className="justify-content-center" id={id}>
      <Col xs={11}>
        <Title title="About me!" />
        <p className="text-justify">
          As a computer engineering graduated, I have the ability to confront
          adversities in ingenious ways, experience in competitions has given me
          the tools to solve problems quickly and effectively. The management of
          databases increased my abilities to control and make efficient the
          handling of large amounts of information. Working with ExtJS improved
          my experience of writing readable code. My period at Oracle taught me
          to maximize my teamwork skills and technical skills by working
          directly with Unix-like systems. I am a person who likes to learn new
          things and face new challenges with the intention of always improving
          and developing software that meets expectations.
        </p>
      </Col>
    </Row>
  );
}

export default About;
