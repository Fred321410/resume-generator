import { Formations } from '../../services/formations.services';
import React, { HTMLAttributes } from 'react';
import './Formation.scss';

interface FormationProps extends HTMLAttributes<HTMLDivElement> {
  formation: Formations;
}

const Formation = ({ formation }: FormationProps) => {
  return (
    <div className="formation">
      <div className="formation__title">
        {formation.from}
        {formation.to ? '-' + formation.to : ''} - {formation.title}
      </div>
      {formation.description ? (
        <div className="formation__description">{formation.description}</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Formation;
