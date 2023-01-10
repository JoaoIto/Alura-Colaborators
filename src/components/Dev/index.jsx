import { styled } from "../../../stitches.config";

export function Dev({ name, image, office, secondColor }) {
  return (
    <Devs>
      <Background style={{ backgroundColor: secondColor }}>
        <Icon src={image} alt={name} />
      </Background>
      <Name>{name}</Name>
      <Office>{office}</Office>
    </Devs>
  );
}

const Devs = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "240px",
  height: "250px",
  borderRadius: "10px",
  border: "4px solid #d3d3d3",
  backgroundColor: "#fff",
});

const Background = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width:  "90%",
  padding: "10px"
})
const Icon = styled("img", {
  height: "100px",
  width: "100px",
  border: "2px solid grey",
  borderRadius: "50%",
});

const Name = styled("h4", {
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "bold",
  color: "$blue400",
});

const Office = styled("span", {
  maxWidth: "80%",
});
