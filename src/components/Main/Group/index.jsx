import { styled } from "../../../../stitches.config";
import { Dev } from "../Dev";

export function Group(props) {
  return (
    <section
    className="
    w-screen
    h-3/6
    flex
    flex-col
    justify-around
    items-center
    m-6
    "
      style={{
        backgroundColor: props.primaryColor,
        border: props.secondColor,
      }}
    >
      <h3
      className="
      w-screen
      text-3xl
      font-inter
      self-center
      text-center
      "
      >{props.name}</h3>
      {props.colaborators.map((colaborator) => (
        <Dev
          key={colaborator.name}
          {...colaborator}
          primaryColor={props.primaryColor}
          secondColor={props.secondColor}
        />
      ))}
    </section>
  );
}
