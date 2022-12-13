import { height } from "@mui/system";
import { styled } from "../../../stitches.config";

export function Group(props){
    return (
      <>
        <Section>
          <TitleCard>{props.name}</TitleCard>
          <Container><Card></Card></Container>
        </Section>
      </>
    );
}

const Section = styled("section", {
  width: "80%",
  height: "150vh",
  display: "flex",
  justifyContent: "space-between",
});

const TitleCard = styled("h3", {
  width: "100vw",
  fontSize: "1.8rem",
  fontFamily: "$Roboto",
  alignSelf: "center",
  textAlign: "center",
});

const Container = styled("div", {
    width: "80%",
    height: "20%", 
})