import React, { HTMLAttributes } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './Button.scss';

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  logo: IconProp;
  label: string;
  isDisabled?: boolean;
}

const Button = ({
  logo,
  isDisabled,
  label,
  className,
  onClick,
}: ButtonProps) => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <CardContainer
      className={className}
      isHollow
      isDisabled={isDisabled}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onClick={!isDisabled ? onClick : () => {}}
    >
      <div className="button">
        <FontAwesomeIcon icon={logo} className="button__logo" />
        <div>{label}</div>
      </div>
    </CardContainer>
  );
};

export default Button;
