import React, { HTMLAttributes } from 'react';
import './Input.scss';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  type: string;
  name: string;
  label: string;
  value: string;
}

const Input = ({ type, label, name, value, onChange }: InputProps) => {
  return (
    <div className="input">
      <input
        placeholder={label}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
