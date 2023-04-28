import React from "react";

interface InputProps {
  label: string;
  value: string;
  onChanges: (value: string) => void;
  required?: boolean;
  type: string;
  placeholder: string;
}

export function Input({label, value, onChanges, required, type, placeholder}: InputProps) {
  const typing = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChanges(event.target.value);
  };

  return (
    <div className="container">
      <label>{label}</label>
      <input
        value={value}
        onChange={typing}
        required={required}
        type={type || "text"}
        placeholder={placeholder}
      />
    </div>
  );
}
