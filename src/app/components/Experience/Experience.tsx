import { Experiences } from '../../services/experiences.services';
import React, { HTMLAttributes, useEffect, useState } from 'react';
import './Experience.scss';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface ExperienceProps extends HTMLAttributes<HTMLDivElement> {
  experience: Experiences;
}

function formatDate(date: string): string {
  const formattedDate = format(new Date(date), 'MMMM uuuu', {
    locale: fr,
  });
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

const Experience = ({ experience }: ExperienceProps) => {
  const [image, setImage] = useState<string | undefined>(undefined);
  useEffect(() => {
    const fetchImage = async () => {
      const response = await import(`../../logos/${experience.logo}.png`);
      setImage(response.default);
    };

    fetchImage();
  }, [experience]);

  const datesAsString = experience.to
    ? 'De ' + formatDate(experience.from) + ' à ' + formatDate(experience.to)
    : 'A partir de ' + formatDate(experience.from);
  return (
    <div className="experience">
      <img className="experience__logo" src={image} />
      <div className="experience__title">
        {experience.enterprise} - {experience.poste}
      </div>
      <div className="experience__subtitle">
        {datesAsString} - {experience.city}
      </div>
      {experience.esn ? (
        <div className="experience__subtitle">Prestataire {experience.esn}</div>
      ) : (
        <></>
      )}
      <div className="experience__description">{experience.description}</div>
      {experience.tools ? (
        <div className="experience__tools">
          <div className="experience__tools__label">
            Outils/technologies utilisés:
          </div>
          {experience.tools}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Experience;
