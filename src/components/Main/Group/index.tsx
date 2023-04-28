import React from "react";
import { Dev } from "../Dev";

interface GroupProps {
  primaryColor: string,
  secondColor: string,
  name: string, 
  colaborators: {
    name: string, 
    img: string,
    office: string
  }[]
}

export function Group({primaryColor, secondColor, name, colaborators}: GroupProps) {
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
        backgroundColor: primaryColor,
        border: secondColor,
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
      >{name}</h3>
      {colaborators.map((colaborator) => (
        <Dev
          key={colaborator.name}
          {...colaborator}
          secondColor={secondColor}
        />
      ))}
    </section>
  );
}
