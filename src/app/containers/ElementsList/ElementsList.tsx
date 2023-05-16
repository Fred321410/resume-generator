import React from 'react';
import './ElementsList.scss';
import CardContainer from '../../components/CardContainer/CardContainer';
import Button from '../../components/Button/Button';
import { Elements } from '../../services/elements.services';

interface ElementsListProps {
  elements: Elements[] | undefined;
  setElement: (element: number | null) => void;
}

const ElementsList = ({ elements, setElement }: ElementsListProps) => {
  const addNewElement = (event: React.MouseEvent | React.FormEvent) => {
    event.preventDefault();
    setElement(null);
  };

  const ElementsBoxes = elements ? (
    elements.map((element: Elements) => {
      return (
        <CardContainer onClick={() => setElement(element.id)} key={element.id}>
          {element.label}
        </CardContainer>
      );
    })
  ) : (
    <></>
  );

  return (
    <div className="elements-list">
      <div className="elements-list__grid">
        <Button logo={'plus'} label={'Add'} onClick={addNewElement} />
        {ElementsBoxes}
      </div>
    </div>
  );
};

export default ElementsList;
