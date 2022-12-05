import React from "react";
import './ContentContainer.scss';

interface ContentContainerProps {
    title: string,
    children: React.ReactNode
}

function ContentContainer(props: ContentContainerProps): JSX.Element {
    return (
        <div className="content-container">
            <div className="content-container__title">{props.title}</div>
            {props.children}
        </div>
    );
}

export default ContentContainer;