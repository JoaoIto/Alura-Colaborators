import { styled } from "../../../stitches.config";

export function Header() {
  return (
    <Background>
      <img
        src="\src\assets\logo.png"
        alt="Logo da Organo"
      />
      <Title>Pessoas e Times</Title>
      <Description>Organização de Devs em um só lugar!</Description>
    </Background>
  );
}

const Background = styled("header", {
  height: "600px",
  backgroundColor: "$blue400",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-evenly"
});

const Title = styled("h1", {
  fontSize: "2.8rem",
  fontFamily: "$Inter"
})

const Description = styled("p", {
  fontSize: "2rem",
  fontFamily: "$Poppins"
})