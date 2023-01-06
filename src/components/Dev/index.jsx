import { styled } from "../../../stitches.config";

export function Dev(props) {
  return (
    <Devs>
      <img src={props.image} />
      <legend>{props.name}</legend>
      <span>{props.desc}</span>
    </Devs>
  );
}

const Devs = styled("div", {
  width: "300px",
});
