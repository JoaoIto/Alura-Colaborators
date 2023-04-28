import { IColaborator } from "../../../shared/interfaces/Icolaborator";
import { Group } from "../Group";
import React from "react";

interface ListTimesProps {
  times: {
    name: string;
    primaryColor: string;
    secondColor: string;
  }[];
  colaborators: IColaborator[];
}

export function ListTimes({ times, colaborators }: ListTimesProps) {
  return (
    <main
      className="
      w-screen
      flex
      flex-col
      items-center
      justify-evenly
    "
    >
      <h2 className="text-4xl font-inter text-blue-400 m-20">
        Minha Organização:{" "}
      </h2>
      {times.map((time) => (
        <Group
          key={time.name}
          name={time.name}
          primaryColor={time.primaryColor}
          secondColor={time.secondColor}
          colaborators={colaborators.filter(
            (colaborator: IColaborator) => colaborator.group === time.name
          )}
        />
      ))}
    </main>
  );
}
