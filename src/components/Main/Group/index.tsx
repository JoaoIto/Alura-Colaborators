import React from "react";
import {IColaborator} from "../../../shared/interfaces/Icolaborator"
import { Dev } from "../Dev";

interface GroupProps {
  primaryColor: string;
  secondColor: string
  name: string;
  colaborators: {IColaborator: IColaborator}[];
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
          name={name} img={""} office={""} key={name}
          {...colaborator}
          secondColor={secondColor}        />
      ))}
    </section>
  );
}
