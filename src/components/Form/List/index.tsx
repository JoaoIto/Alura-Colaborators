import React from "react";

interface ListProps{
  label: string, 
  onChanges: (value: string) => void,
  required: boolean,
  value: string,
  itens: string[]
}

export function List({label, onChanges, required, value, itens}: ListProps) {
  return (
    <div className="
    text-black
    flex
    flex-col
    items-center
    text-3xl
    h-20
    p-2
    w-4/5
    ">
      <label>{label}</label>
      <select className="
        w-full
        self-center
      text-slate-400
        text-2xl
      "
      onChange={event => 
        onChanges(event.target.value)} 
        required={required} 
        value={value}>
          <option value="Times"></option>
          {itens.map((item) => {
            return <option key={item}>{item}</option>;
          })}
      </select>
    </div>
  );
}
