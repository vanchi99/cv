import { Col, Container, Row } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { RiEmotionHappyLine } from "react-icons/ri";
import { Subtitle } from "./Titles";

function Skill({ title, list }) {
  return (
    <Container>
      <Subtitle title={title} />
      <Row className="d-flex ps-sm-5 ps-md-2 ps-xl-4 justify-content-center justify-content-sm-start">
        {list.map((e, i) => {
          let lis = [];
          let cont = 0;
          for (let a of e.stars) {
            let tmp =
              a == "." ? (
                <BsStarFill key={++cont} />
              ) : a == "/" ? (
                <BsStarHalf key={++cont} />
              ) : a == "," ? (
                <BsStar key={++cont} />
              ) : (
                <RiEmotionHappyLine key={++cont} />
              );
            lis.push(tmp);
          }
          return (
            <Col
              key={i}
              xs={8}
              sm={6}
              md={12}
              className="d-flex justify-content-between"
            >
              {e.tech + " "}
              <span>{lis}</span>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Skill;
