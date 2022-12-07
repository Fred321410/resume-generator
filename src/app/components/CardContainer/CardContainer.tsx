import React from "react";
import './CardContainer.scss';

interface CardContainerProps {
    isHollow?: boolean,
    isDisabled?: boolean,
    children: React.ReactNode
}

function CardContainer(props: CardContainerProps): JSX.Element {
    return (
        <div className={`card-container ${props.isHollow ? 'hollow' : ''} ${props.isDisabled ? 'disabled' : ''}`}>
            {props.children}
        </div>
    );
}

export default CardContainer;