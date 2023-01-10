import { styled } from "../../../stitches.config";
import { Dev } from "../Dev";

export function Group(props) {
  return (
    <Section
      style={{
        backgroundColor: props.primaryColor,
        border: props.secondColor,
      }}
    >
      <TitleCard>{props.name}</TitleCard>
      {props.colaborators.map((colaborator) => (
        <Dev
          key={colaborator.name}
          {...colaborator}
          primaryColor={props.primaryColor}
          secondColor={props.secondColor}
        />
      ))}
    </Section>
  );
}

const Section = styled("section", {
  width: "100vw",
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  margin: "20px 0",
});

const TitleCard = styled("h3", {
  width: "100vw",
  fontSize: "1.8rem",
  fontFamily: "$Inter",
  fontWeight: "500",
  alignSelf: "center",
  textAlign: "center",
});
