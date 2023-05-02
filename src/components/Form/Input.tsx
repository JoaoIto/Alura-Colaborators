import React from "react";

interface InputProps {
  label: string;
  value: string;
  onChanges: (value: string) => void;
  required?: boolean;
  type?: 'text' | 'password' | 'date' | 'email' | 'number';
  placeholder: string;
}

export function Input({label, value, onChanges, required, type, placeholder}: InputProps) {
  const typing = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChanges(event.target.value);
  };

  return (
    <div className="
    h-4/5
    w-4/5
    p-3
    flex
    flex-col
    items-center
    justify-evenly
    ">
      <label className="
        text-3xl
        font-inter
      "      
      >{label}</label>
      <input
        className="
          text-2xl
          h-16
          p-2
          rounded-lg
          w-4/5
          border-none
        "
        value={value}
        onChange={typing}
        required={required}
        type={type || "text"}
        placeholder={placeholder}
      />
    </div>
  );
}
