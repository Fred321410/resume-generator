import { Knowledge } from '../../services/knowledge.services';
import React, { HTMLAttributes } from 'react';
import './KnowledgeComponent.scss';

interface KnowledgeComponentProps extends HTMLAttributes<HTMLDivElement> {
  knowledge: Knowledge;
}

const KnowledgeComponent = ({ knowledge }: KnowledgeComponentProps) => {
  return (
    <div className="knowledge">
      <div className="knowledge">{knowledge.title}</div>
    </div>
  );
};

export default KnowledgeComponent;
