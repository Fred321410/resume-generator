import React, { HTMLAttributes } from 'react';
import './Input.scss';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  type: string;
  name: string;
  label: string;
  value: string | Date;
  placeholder?: string;
  pattern?: string;
  required?: boolean;
}

const Input = ({
  type,
  label,
  name,
  value,
  placeholder,
  pattern,
  required,
  onChange,
}: InputProps) => {
  return (
    <div className="input">
      <label>
        {label}
        {pattern ? (
          <input
            placeholder={placeholder ? placeholder : label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            pattern={pattern}
            required
          />
        ) : (
          <input
            placeholder={placeholder ? placeholder : label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
          />
        )}
      </label>
    </div>
  );
};

export default Input;
