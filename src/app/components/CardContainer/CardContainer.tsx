import classNames from "classnames";
import React, { HTMLAttributes } from "react";
import './CardContainer.scss';

interface CardContainerProps extends HTMLAttributes<HTMLDivElement> {
    isHollow?: boolean,
    isDisabled?: boolean,
}

const CardContainer = ({className, isHollow, isDisabled, children, ...htmlProps}: CardContainerProps) => {
  const classes = classNames('card-container', {
    'hollow': isHollow,
    'disabled': isDisabled
  }, className)
  return (
    <div className={classes} {...htmlProps}>
      {children}
    </div>
  );
}

export default CardContainer;