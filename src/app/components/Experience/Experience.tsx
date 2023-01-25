import { Experiences } from '../../services/experiences.services';
import React, { HTMLAttributes } from 'react';
import './Experience.scss';

interface ExperienceProps extends HTMLAttributes<HTMLDivElement> {
  experience: Experiences;
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className="experience">
      <div className="experience__title">
        {experience.enterprise} - {experience.poste}
      </div>
      <div className="experience__subtitle">
        {experience.from} - {experience.to} - {experience.city}
      </div>
      <div className="experience__description">{experience.description}</div>
    </div>
  );
};

export default Experience;
