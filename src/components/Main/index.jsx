import { styled } from "../../../stitches.config";
import style from "./style.css";
import { Group } from "../Group"

export function Main(props){
    return (
      <main>
        <Title>Minha Organização: </Title>
        <Group name="Programação" />
        <Group name="Front_End" />
        <Group name="Data-Science" />
        <Group name="Devops" />
        <Group name="UX e Design" />
        <Group name="Mobile" />
        <Group name="Inovação e Gestão" />
      </main>
    );
}

const Title = styled("h2", {
  fontSize: "2.5rem",
  fontFamily: "$Inter",
  fontWeight: "normal",
  color: "$blue400",
});