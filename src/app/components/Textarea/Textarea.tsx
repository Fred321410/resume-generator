import React, { HTMLAttributes } from 'react';
import './Textarea.scss';

interface TextareaProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  isValid?: boolean;
}

const Textarea = ({
  label,
  name,
  value,
  placeholder,
  required,
  onChange,
  isValid = true,
}: TextareaProps) => {
  const resize = () => {
    document.getElementById('textarea' + name).style.height =
      document.getElementById('textarea' + name).scrollHeight + 'px';
  };

  return (
    <div className="textarea">
      <label>
        {label}
        <textarea
          id={'textarea' + name}
          className={isValid ? '' : 'invalid'}
          placeholder={placeholder ? placeholder : label}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          onKeyUp={resize}
        />
      </label>
    </div>
  );
};

export default Textarea;
