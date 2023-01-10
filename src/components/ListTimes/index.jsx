import { styled } from "../../../stitches.config";
import style from "./style.css";
import { Group } from "../Group";
import { Dev } from "../Dev";
export function ListTimes(props) {
  return (
    <main>
      <Title>Minha Organização: </Title>
      {props.times.map((time) => (
        <Group
          key={time.name}
          name={time.name}
          primaryColor={time.primaryColor}
          secondColor={time.secondColor}
          colaborators={props.colaborators.filter((colaborator) => colaborator.group === time.name)}
        />
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