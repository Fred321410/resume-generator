import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import './Button.scss';

interface ButtonProps {
    logo?: string,
    label: string,
    isDisabled?: boolean
    callback: (a: any) => any
}

function Button(props: ButtonProps): JSX.Element {
    return (
        <div onClick={!props.isDisabled ? props.callback : () => {}}>
            <CardContainer isHollow isDisabled={props.isDisabled}>
                <div className='button'>
                    <i className={`button__logo ${props.logo}`}></i>
                    <div>{props.label}</div>
                </div>
            </CardContainer>
        </div>
    );
}

export default Button;