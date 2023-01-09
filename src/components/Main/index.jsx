import { styled } from "../../../stitches.config";
import style from "./style.css";
import { useState } from "react";
import { Group } from "../Group";
import { Dev } from "../Dev";

export function Main(props) {
  const [colaborators, setColaborators] = useState([]);

  const newColaborator = (colaborator) => {
    console.log(colaborator);
    setColaborators([...colaborators, colaborator]);
  };

  const times = [
    {
      name: "Programação",
      primaryColor: "#D9F7E9",
      secondColor: "#57C278",
    },

    {
      name: "Front-End",
      primaryColor: "#E8F8FF",
      secondColor: "#82CFFA",
    },

    {
      name: "Data-Science",
      primaryColor: "#F0F8E2",
      secondColor: "#A6D157",
    },

    {
      name: "Devops",
      primaryColor: "#FDE7E8",
      secondColor: "#E06B69",
    },

    {
      name: "UX e design",
      primaryColor: "#FAE9F5",
      secondColor: "#DB6EBF",
    },

    {
      name: "Mobile",
      primaryColor: "#FFF5D9",
      secondColor: "#FFBA05",
    },

    {
      name: "Inovação e Gestão",
      primaryColor: "#FFEEDF",
      secondColor: "#FF8A29",
    },
  ];

  return (
    <main>
      <Title>Minha Organização: </Title>
      {times.map((time) => (
        <Group
          key={time.name}
          name={time.name}
          primaryColor={time.primaryColor}
          secondColor={time.secondColor}
        >
          {props.colaborators.map((colaborator) => (
            <Dev
              name={colaborator.name}
              office={colaborator.office}
              desc={colaborator.desc}
              image={colaborator.image}
            ></Dev>
          ))}
        </Group>
      ))}
    </main>
  );
}

const Title = styled("h2", {
  fontSize: "2.5rem",
  fontFamily: "$Inter",
  fontWeight: "normal",
  color: "$blue400",
  margin: "100px 0",
});
