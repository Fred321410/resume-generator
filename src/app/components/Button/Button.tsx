import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './Button.scss';

interface ButtonProps {
    logo: IconProp,
    label: string,
    isDisabled?: boolean
    callback: (a: any) => any
}

const Button = ({logo, isDisabled, label, callback}: ButtonProps) => {
    return (
        <CardContainer isHollow isDisabled={isDisabled} onClick={!isDisabled ? callback : () => {}} >
            <div className='button'>
                <FontAwesomeIcon icon={logo} className="button__logo" />
                <div>{label}</div>
            </div>
        </CardContainer>
    );
}

export default Button;