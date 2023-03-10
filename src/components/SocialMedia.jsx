import {
  Container,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillCodeSandboxSquare,
  AiOutlineMail,
} from "react-icons/ai";
import { TbOmega } from "react-icons/tb";
import { SiCodemagic } from "react-icons/si";
import { Title } from "./Titles";

function SocialMedia({ id }) {
  let social = [
    {
      media: "LinkedIn",
      icon: () => <AiFillLinkedin />,
      overlay:
        "LinkedIn is the world's largest professional network on the internet",
      link: "https://www.linkedin.com/in/ivan-gonzalez-mendoza-81b33920a/",
    },
    {
      media: "Gmail",
      icon: () => <AiOutlineMail />,
      overlay: "ivangonzalezmza@gmail.com",
      link: "mailto:ivangonzalezmza@gmail.com",
    },
    {
      media: "GitHub",
      icon: () => <AiOutlineGithub />,
      overlay:
        "GitHub is an Internet hosting service for software development and version control using Git.",
      link: "https://www.google.com/",
    },
    {
      media: "CodeForces",
      icon: () => <AiFillCodeSandboxSquare />,
      overlay:
        "Codeforces' aim is to offer you a convenient platform to organize, run and discuss programming contests.",
      link: "https://codeforces.com/profile/Vanchi822",
    },
    {
      media: "CodeSignal",
      icon: () => <SiCodemagic />,
      overlay:
        "CodeSignal is the leading technical interview and assessment solution, with advanced job sim technology across the entire hiring process.",
      link: "https://app.codesignal.com/profile/vanchi822",
    },
    {
      media: "OmegaUp",
      icon: () => <TbOmega />,
      overlay:
        "omegaUp is a organization with the mission of building the talent pipeline of Software Engineers from Spanish-speaking communities.",
      link: "https://omegaup.com/profile/vanchi822",
    },
  ];
  let lis = [];
  let tmp;
  social.forEach((e, i) => {
    tmp = (
      <Col key={i} xs={6} md={4} lg={3} className="m-0 p-0">
        <OverlayTrigger
          placement="top"
          delay={{ show: 100, hide: 150 }}
          overlay={<Tooltip id={"button-" + i}>{e.overlay}</Tooltip>}
        >
          <Button
            variant="light"
            style={{ width: "100%" }}
            onClick={() => {
              window.open(e.link);
            }}
          >
            {<e.icon />} {e.media}{" "}
          </Button>
        </OverlayTrigger>
      </Col>
    );
    lis.push(tmp);
  });

  return (
    <Row id={id}>
      <Title title="Social Media" />
      <Container>
        <Row className="mx-5 my-3 justify-content-center">{lis}</Row>
      </Container>
    </Row>
  );
}

export default SocialMedia;
