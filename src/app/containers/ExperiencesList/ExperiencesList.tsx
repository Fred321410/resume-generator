import React from 'react';
import './ExperiencesList.scss';
import CardContainer from '../../components/CardContainer/CardContainer';
import {
  Experiences,
  ExperiencesNoId,
} from '../../services/experiences.services';
import Button from '../../components/Button/Button';

interface ExperiencesListProps {
  experiences: [Experiences];
  setExperience: (experience: Experiences | ExperiencesNoId) => void;
}

const ExperiencesList = ({
  experiences,
  setExperience,
}: ExperiencesListProps) => {
  const addNewExperience = (event: React.MouseEvent | React.FormEvent) => {
    event.preventDefault();
    setExperience({
      poste: '',
      enterprise: '',
      from: '',
    });
  };

  const ExperiencesBoxes = experiences ? (
    experiences.map((experience: Experiences) => {
      return (
        <CardContainer
          onClick={() => setExperience(experience)}
          key={experience.id}
        >
          {experience.enterprise}
        </CardContainer>
      );
    })
  ) : (
    <></>
  );

  return (
    <div className="experiences-list">
      <div className="experiences-list__grid">
        <Button logo={'plus'} label={'Add'} onClick={addNewExperience} />
        {ExperiencesBoxes}
      </div>
    </div>
  );
};

export default ExperiencesList;
