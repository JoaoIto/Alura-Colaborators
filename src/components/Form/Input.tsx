import React from "react";

interface InputProps {
  label: string;
  value: string;
  onChanges: (value: string) => void;
  required?: boolean;
  type: string;
  placeholder: string;
}

export function Input(props: InputProps) {
  const typing = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChanges(event.target.value);
  };

  return (
    <div className="container">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={typing}
        required={props.required}
        type={props.type || "text"}
        placeholder={props.placeholder}
      />
    </div>
  );
}
