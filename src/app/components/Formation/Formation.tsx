import { Formations } from '../../services/formations.services';
import React, { HTMLAttributes } from 'react';
import './Formation.scss';

interface FormationProps extends HTMLAttributes<HTMLDivElement> {
  formation: Formations;
}

const Formation = ({ formation }: FormationProps) => {
  return (
    <div className="formation">
      <div className="formation__title">{formation.title}</div>
    </div>
  );
};

export default Formation;
