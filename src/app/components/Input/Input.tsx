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
  isValid?: boolean;
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
  isValid = true,
}: InputProps) => {
  return (
    <div className="input">
      <label>
        {label}
        {pattern ? (
          <input
            className={isValid ? '' : 'invalid'}
            placeholder={placeholder ? placeholder : label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            pattern={pattern}
            required={required}
          />
        ) : (
          <input
            className={isValid ? '' : 'invalid'}
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
