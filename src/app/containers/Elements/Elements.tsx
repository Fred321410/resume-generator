import ContentContainer from '../../components/ContentContainer/ContentContainer';
import React, { HTMLAttributes } from 'react';
import './Elements.scss';
import ElementsList from '../ElementsList/ElementsList';
import { Elements } from '../../services/elements.services';

interface ElementsProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  elements: [Elements] | undefined;
  displayForm: boolean;
  setSelectedElement: (element: number | null) => void;
}

const Elements = ({
  elements,
  title,
  displayForm,
  setSelectedElement,
  children,
}: ElementsProps) => {
  return (
    <ContentContainer title={title}>
      <div className="elements">
        {!displayForm ? (
          <ElementsList
            elements={elements}
            setElement={setSelectedElement}
          ></ElementsList>
        ) : (
          children
        )}
      </div>
    </ContentContainer>
  );
};

export default Elements;
