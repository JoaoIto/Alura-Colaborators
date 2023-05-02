import React from "react";

interface DevProps {
  name: string;
  img: string;
  office: string;
  secondColor: string;
  date: string;
}

export function Dev({ name, img, office, secondColor, date }: DevProps) {
  return (
    <div
    className="
    flex
    flex-col
    items-center
    justify-evenly
    w-80
    h-80
    border-2
    border-solid
    border-slate-300
    rounded-xl
    bg-white
    "
    >
      <div
      className="
      flex
      items-center
      justify-center
      w-5/6
      p-2
      "
      style={{ backgroundColor: secondColor }}>
        <img
        className="
        h-40
        w-40
        border-2
        border-solid
        border-slate-300
        rounded-3
        "
        src={img} alt={name} />
      </div>
      <legend
      className="
      text-center
      text-3xl
      font-bold
      text-blue-400
      "
      >{name}</legend>
      <span
      className="
      text-slate-700
      text-xl
      max-w-xs
      "
      >{office}</span>

      <span
      className="
      text-slate-700
      text-xl
      max-w-xs
      "
      >{new Date(date).toLocaleDateString()}</span>
    </div>
  );
}
