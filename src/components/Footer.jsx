import { Row, Col, Container } from "react-bootstrap";
import { Title } from "./Titles";
import { DiReact } from "react-icons/di";
import { TbBrandBootstrap, TbBrandReactNative } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  let list = [
    {
      title: "React",
      description:
        "React was used to make all the interface, it was utilized components to create the different sections of this web, also, useState and props are necessary to develop the content. ",
      icon: () => <DiReact />,
    },
    {
      title: "react-scroll",
      description:
        "react-scroll is used to animate the scrolling across the site, making a smooth navigate when you click on a navbar element.",
      icon: () => <RiReactjsLine />,
    },
    {
      title: "react-icons",
      description:
        "react-icons was utilized to import all of the icons in this website. ",
      icon: () => <TbBrandReactNative />,
    },
    {
      title: "React-Bootstrap",
      description:
        "Bootstrap was utilized to facilitate the design, using the style of some components, such as the Carousel and the responsive web design. ",
      icon: () => <TbBrandBootstrap />,
    },
    {
      title: "GitHub Pages",
      description:
        "GitHub Pages is utilized to host the website, directly from a repository on GitHub.com.",
      icon: () => <AiFillGithub />,
    },
    {
      title: "Vite",
      description:
        "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects, in this case, to React. ",
      icon: () => <SiVite />,
    },
  ];
  let lis = list.map((e, i) => {
    return (
      <Col key={i} xs={9} sm={5} md={5} className="mx-2 my-3">
        <div className="tech">
          <div className="tech-title py-2">
            {<e.icon />} {e.title}
          </div>
          <div className="tech-body px-3 py-2">{e.description}</div>
        </div>
      </Col>
    );
  });
  return (
    <Row className="justify-content-center footer m-0 pb-4">
      <Title title={"About this page"} />
      <Col xs={11} sm={12} md={12} lg={11} xl={10} className="text-center">
        Some of the technologies used to create this webpage are:
        <Row className="justify-content-center">{lis}</Row>
      </Col>
    </Row>
  );
}

export default Footer;
