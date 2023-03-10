import { Card, Row, Col } from "react-bootstrap";
import { Title } from "./Titles";

function Experience({ id }) {
  let experience = [
    {
      company: "CinqRivers",
      position: "Database Manager",
      descriptionPosition:
        "My position was database manager, the modelling of the DB was relational, using MySQL as language. After, I populed the DB with the data utilized for the company. Also, I had to maintain the data updated when a new place was offer. The software was made for internal use, since it generates the itineraries of the trips, only choosing the places, tours and the time that their clients wanted.",
      descriptionCompany:
        "is a tour operator around the world and specialized in trips to Europe.",
      period: "February 2019 – April 2020",
    },
    {
      company: "GoBulletin",
      position: "Developer ExtJS",
      descriptionPosition:
        "It was a quick task, the purpose was to update the syntax of the code, to the newer version. The framework used was ExtJS. ",
      descriptionCompany: "is a local point of sale aimed to small stores..",
      period: "July 2020 – September 2020",
    },
    {
      company: "Oracle",
      position: "Student/Intern",
      descriptionPosition:
        "During my stay in Oracle, I was working on Database System Test. One of my first tasks was to create destructive tests, on Bash Scripting and GitHub, to prove GI (Grid Infrastructure) and DB oracle. After, I worked on Solaris and AIX from terminal to configure disks, networks and users to do a successfull instalation of the software. Some of the tools utilized were Slack, Zoom, Jira and Confluence, to implement a scrum methodolgy.",
      descriptionCompany: "is a multinational computer technology corporation.",
      period: "July 2021 – January 2023",
    },
  ];
  let lis = [];
  experience.forEach((e, i) => {
    let tmp = (
      <Card key={i} className="m-3">
        <Card.Header style={{ textAlign: "center" }}>
          <Card.Title>
            {e.position} at {e.company}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{e.period}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <p className="text-center mb-2">
            <b>{e.company} </b>
            {e.descriptionCompany}
          </p>
          <p className="text-justify">{e.descriptionPosition}</p>
        </Card.Body>
      </Card>
    );
    lis.push(tmp);
  });
  return (
    <Row id={id}>
      <Col>
        <Title title="Experience" />
        {lis}
      </Col>
    </Row>
  );
}

export default Experience;
