import { Container, Navbar, Nav, Offcanvas, Row, Col } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import { GiSeaDragon } from "react-icons/gi";

function Navigation({ list, show, setShow }) {
  return (
    <Navbar expand="md" sticky="top" className="navigation-color">
      <Container>
        <Row className="w-100 justify-content-center">
          <Col
            xs={10}
            sm={9}
            md={12}
            lg={11}
            xl={10}
            className="d-flex justify-content-between align-items-center"
          >
            <Navbar.Brand
              href="#home"
              style={{ fontSize: "2.3rem" }}
              className="d-flex align-items-center"
              onClick={scroll.scrollToTop}
            >
              <GiSeaDragon />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setShow(true)}
            />
            <Navbar.Offcanvas
              placement="end"
              show={show}
              onClick={() => setShow(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Resume IGM</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex justify-content-md-end">
                <Nav className="nav-item">
                  {list.map((e, i) => {
                    return (
                      <Link
                        className="ms-3 ms-lg-4"
                        activeClass="active"
                        to={e.id}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        key={i}
                        onClick={(e) => {
                          setShow(false);
                        }}
                      >
                        {e.show}
                      </Link>
                    );
                  })}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Navigation;
