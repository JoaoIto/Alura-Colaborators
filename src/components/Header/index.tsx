import React from "react";

interface HeaderProps {
  srcImg: string,
  altImg?: string
}

export function Header({srcImg, altImg} : HeaderProps) {
  return (
    <div className="h-80 p-8 bg-blue-400 flex items-center flex-col justify-evenly">
      <img
        src={srcImg}
        alt={altImg}
      />
      <h1 className="text-5xl text-white font-inter">Pessoas e Times</h1>
      <span className="text-4xl text-white font-popping">Organização de Devs em um só lugar!</span>
    </div>
  );
}