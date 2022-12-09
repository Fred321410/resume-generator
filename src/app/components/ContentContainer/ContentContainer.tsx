import React, { HTMLAttributes } from "react";
import './ContentContainer.scss';

interface ContentContainerProps extends HTMLAttributes<HTMLDivElement> {
    title: string
}

const ContentContainer = ({title, children}: ContentContainerProps) => {
  return (
    <div className="content-container">
      <div className="content-container__title">{title}</div>
      {children}
    </div>
  );
}

export default ContentContainer;