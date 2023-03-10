import { Col, Row, Image } from "react-bootstrap";
import UTM from "../assets/UTM.png";
import { Title } from "./Titles";

function Education({ id }) {
  return (
    <Row className="justify-content-center" id={id}>
      <Title title="Education" />
      <Col xs={4} lg={3}>
        <img src={UTM} alt="Logo UTM" width="100%" />
      </Col>
      <Col
        xs={12}
        lg={7}
        style={{ textAlign: "center", display: "grid" }}
        className="align-items-center"
      >
        <span>
          <h5>
            <span>COMPUTER ENGINEERING </span>
            <span className="text-muted" style={{ fontSize: "90%" }}>
              (2017-2022)
            </span>
          </h5>
          <p>
            <a href="https://www.utm.mx" target="_blank">
              UNIVERSIDAD TECNOLÓGICA DE LA MIXTECA
              <br />
            </a>
            <span className="text-muted" style={{ fontSize: "95%" }}>
              Huajuapan de León, Oaxaca.
            </span>
          </p>
        </span>
      </Col>
    </Row>
  );
}

export default Education;
