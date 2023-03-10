import { Accordion, Row } from "react-bootstrap";
import { Title } from "./Titles";

function Contests({ id }) {
  let contests = [
    {
      title: "THIRTY-SIXTH PLACE IN THE 2021 ICPC MEXICO FINALS.",
      location: "CDMX, CDMX 2022.",
      description:
        "The International Collegiate Programming Contest is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure. Through training and competition, teams challenge each other to raise the bar on the possible. Quite simply, it is the oldest, largest, and most prestigious programming contest in the world.",
    },
    {
      title: "FIFTY-FIRST PLACE IN THE 2020 ICPC MEXICO FINALS",
      location: "ZACATECAS, ZACATECAS 2021.",
      description:
        "The International Collegiate Programming Contest is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure. Through training and competition, teams challenge each other to raise the bar on the possible. Quite simply, it is the oldest, largest, and most prestigious programming contest in the world.",
    },
    {
      title: "THIRTY-FIRST PLACE IN THE 2019 ICPC MEXICO FINALS.",
      location: "MONTERREY, NUEVO LEON 2019.",
      description:
        "The International Collegiate Programming Contest is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure. Through training and competition, teams challenge each other to raise the bar on the possible. Quite simply, it is the oldest, largest, and most prestigious programming contest in the world.",
    },
    {
      title:
        "THIRTY-FIFTH PLACE IN THE MEXICO AND CENTRAL AMERICA FINALS ACM-ICPC 2018.",
      location: "GUADALAJARA, JALISCO 2018.",
      description:
        "The International Collegiate Programming Contest is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure. Through training and competition, teams challenge each other to raise the bar on the possible. Quite simply, it is the oldest, largest, and most prestigious programming contest in the world.",
    },
    {
      title: "SECOND PLACE UAS CHALLENGE TALENT LAND",
      location: "GUADALAJARA, JALISCO 2018.",
      description:
        "Talent Land 2023 will be dedicated to talent development, so that the participants can meet with experts from different locations who will share their experience and knowledge. This event is a place for creative minds, entrepreneurs and young talents to find new ideas, new people and new technologies to improve your personal and professional life.",
    },
    {
      title: "SIXTH PLACE TMR MONTERREY AUTONOMOUS DRONES",
      location: "MONTERREY, NUEO LEON 2018.",
      description:
        "The Torneo Mexicano de Robótica (TMR) has established itself as the most important event in Mexico that brings together friendly robotics competitions. Autonomous drones is a flight challenge where teams are expected to demonstrate reactivity with their drones such as avoiding obstacles, locating in the environment, planning routes and having the ability to generate maps.",
    },
    {
      title:
        "ONE-HUNDRED EIGHTY-FOURTH PLACE IN THE MEXICO AND CENTRAL AMERICA FINALS ACM-ICPC 2017.",
      location: "ONLINE, 2017.",
      description:
        "The International Collegiate Programming Contest is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure. Through training and competition, teams challenge each other to raise the bar on the possible. Quite simply, it is the oldest, largest, and most prestigious programming contest in the world.",
    },
    {
      title: "BRONZE MEDAL 21º OMI",
      location: "VERACRUZ, VERACRUZ 2016.",
      description:
        "The Olimpiada Mexicana de Informática (OMI) is a national contest for young people with the ability to solve practical problems through logic and the use of computers, which seeks to promote technological development in Mexico and find the best programmers, who will form the selection Mexican to participate in the next International Olympiad in Informatics (IOI).",
    },
    {
      title: "HONORABLE MENTION IN 20º OMI",
      location: "CHIHUAHUA, CHIHUAHUA 2015.",
      description:
        "The Olimpiada Mexicana de Informática (OMI) is a national contest for young people with the ability to solve practical problems through logic and the use of computers, which seeks to promote technological development in Mexico and find the best programmers, who will form the selection Mexican to participate in the next International Olympiad in Informatics (IOI).",
    },
  ];
  let lis = [];
  contests.forEach((e, i) => {
    let tmp = (
      <Accordion.Item eventKey={i} key={i}>
        <Accordion.Header>
          <span>
            {e.title} - <span className="text-muted">{e.location}</span>
          </span>
        </Accordion.Header>
        <Accordion.Body className="text-justify">
          {e.description}
        </Accordion.Body>
      </Accordion.Item>
    );
    lis.push(tmp);
  });
  return (
    <Row id={id}>
      <Title title="Contests" />
      <Accordion>{lis}</Accordion>
    </Row>
  );
}

export default Contests;
