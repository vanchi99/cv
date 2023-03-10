import { Container, Row, Col } from "react-bootstrap";
import Skill from "./Skill";
import { Title } from "./Titles";

function Skills({ id }) {
  let skill = [
    {
      title: "Skills",
      sub: [
        {
          title: "PROGRAMMING LANGUAGES",
          content: [
            { tech: "C", stars: "..../" },
            { tech: "C++", stars: "..../" },
            { tech: "Python", stars: "....," },
            { tech: "Bash Scripting", stars: "....," },
            { tech: "Java", stars: ".../," },
          ],
        },
        {
          title: "WEB DEVELOPMENT",
          content: [
            { tech: "HTML5", stars: "..../" },
            { tech: "CSS3", stars: "..../" },
            { tech: "JavaScript", stars: "..../" },
            { tech: "React", stars: "....," },
            { tech: "Angular", stars: "../,," },
            { tech: "PHP", stars: ".../," },
            { tech: "MySQL", stars: "....," },
            { tech: "Bootstrap", stars: "....," },
            { tech: "ExtJS", stars: "../,," },
          ],
        },
        {
          title: "OPERATING SYSTEMS",
          content: [
            { tech: "Linux", stars: "..../" },
            { tech: "Windows", stars: "....," },
            { tech: "AIX", stars: ".../," },
            { tech: "Solaris", stars: ".../," },
          ],
        },
        {
          title: "AGILE METHODOLOGY",
          content: [
            { tech: "Scrum", stars: "..../" },
            { tech: "Jira", stars: "....," },
            { tech: "Slack", stars: "....," },
            { tech: "Git", stars: "....," },
          ],
        },
      ],
    },
    {
      title: "Languages",
      sub: [
        { title: "SPANISH", content: [{ tech: "Native", stars: "....." }] },
        {
          title: "ENGLISH",
          content: [{ tech: "Intermediate", stars: "...,," }],
        },
      ],
    },
    {
      title: "Hobbies",
      sub: [
        /* { title: "Basketball", content: [{ tech: "", stars: "" }] },
        { title: "Chess", content: [{ tech: "", stars: "" }] },
        { title: "Videogames", content: [{ tech: "", stars: "" }] }, */
        {
          title: "",
          content: [
            { tech: "Basketball", stars: "ccccc" },
            { tech: "Chess", stars: "ccccc" },
            { tech: "Videogames", stars: "ccccc" },
          ],
        },
      ],
    },
  ];
  let lis = [];
  skill.forEach((e, i) => {
    let tmp = (
      <Row key={i}>
        <Title title={e.title} />
        <Col>
          {e.sub.map((e1, i1) => {
            return <Skill key={i1} title={e1.title} list={e1.content} />;
          })}
        </Col>
      </Row>
    );
    lis.push(tmp);
  });
  return (
    <Row id={id}>
      <Container className="pb-4">{lis}</Container>
    </Row>
  );
}

export default Skills;
