import { Container, Row, Col } from "react-bootstrap";
import Skills from "./Skills";
import About from "./About";
import Contests from "./Contests";
import Experience from "./Experience";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Education from "./Education";
import SocialMedia from "./SocialMedia";
import { useState } from "react";
import Footer from "./Footer";

function CV() {
  let list = [
    { show: "About me!", id: "about" },
    { show: "Education", id: "education" },
    { show: "Experience", id: "experience" },
    { show: "Skills", id: "skills" },
    { show: "Projects", id: "projects" },
    { show: "Contests", id: "contests" },
    { show: "Media", id: "social" },
  ];
  const [AB, EDU, EXP, SK, PRJ, CONT, SM] = [0, 1, 2, 3, 4, 5, 6];
  const [theme, setTheme] = useState(true);
  const [showCanvas, setShowCanvas] = useState(false);
  return (
    <>
      <Navigation list={list} show={showCanvas} setShow={setShowCanvas} />
      <Container className={theme ? "light" : "dark"}>
        <Row className="justify-content-center">
          <Col md={8}>
            <About id={list[AB].id} />
            <Education id={list[EDU].id} />
            <Experience id={list[EXP].id} />
          </Col>
          <Col
            xs={11}
            md={4}
            lg={3}
            className={"mt-3 " + (theme ? "asside-light" : "asside-dark")}
            style={{ borderRadius: "15px" }}
          >
            <Skills id={list[SK].id} />
          </Col>
        </Row>
        <Projects id={list[PRJ].id} />
        <Contests id={list[CONT].id} />
        <SocialMedia id={list[SM].id} />
      </Container>
      <Footer />
    </>
  );
}

export default CV;
