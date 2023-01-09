import { styled } from "../../../stitches.config";
import style from "./style.css"

export function Dev(name, image, office, desc) {
  return (
    <Devs>
      <img src={image} alt={name} />
      <legend>{name}</legend>
      <span>{office}</span>
      <p>{desc}</p>
    </Devs>
  );
}

const Devs = styled("div", {
  width: "240px",
  height: "300px",
  borderRadius: "10px",
  border: "4px solid #d3d3d3",
  backgroundColor: "#fff"
});
