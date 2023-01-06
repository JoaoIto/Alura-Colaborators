import { styled } from "../../../stitches.config";
import { Dev } from "../Dev";

export function Group(props){
    return (
        <Section style={{ backgroundColor: props.primaryColor }}>
          <TitleCard>{props.name}</TitleCard>
          <Dev />
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
});

const TitleCard = styled("h3", {
  width: "100vw",
  fontSize: "1.8rem",
  fontFamily: "$Roboto",
  alignSelf: "center",
  textAlign: "center",
});