import React from "react";
import './CardContainer.scss';

interface CardContainerProps {
    isHollow?: boolean,
    children: React.ReactNode
}

function CardContainer(props: CardContainerProps): JSX.Element {
    return (
        <div className={`card-container ${props.isHollow ? 'hollow' : ''}`}>
            {props.children}
        </div>
    );
}

export default CardContainer;