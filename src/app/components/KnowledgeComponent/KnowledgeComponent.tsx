import { Knowledge } from '../../services/knowledge.services';
import React, { HTMLAttributes } from 'react';
import './KnowledgeComponent.scss';

interface KnowledgeComponentProps extends HTMLAttributes<HTMLDivElement> {
  type: string;
  knowledge: Knowledge[];
}

const KnowledgeComponent = ({ type, knowledge }: KnowledgeComponentProps) => {
  return (
    <div className="knowledge">
      <div className="knowledge__type">{type}</div>
      {knowledge
        .sort((kl1: Knowledge, kl2: Knowledge) => kl1.order - kl2.order)
        .map((kl: Knowledge) => (
          <div className="knowledge__title" key={kl.id}>
            {kl.title}
          </div>
        ))}
    </div>
  );
};

export default KnowledgeComponent;
