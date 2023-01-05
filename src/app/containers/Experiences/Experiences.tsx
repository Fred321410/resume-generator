import ContentContainer from '../../components/ContentContainer/ContentContainer';
import React, { useEffect, useState } from 'react';
import './Experiences.scss';
import {
  GET_EXPERIENCES,
  Experiences,
  ExperiencesNoId,
} from '../../services/experiences.services';
import { useQuery } from '@apollo/client';
import { Resumes } from '../../services/resumes.services';
import ExperiencesList from '../ExperiencesList/ExperiencesList';
import ExperienceForm from '../ExperienceForm/ExperienceForm';

interface ExperiencesProps {
  resume: Resumes;
}

const Experiences = ({ resume }: ExperiencesProps) => {
  const [experiences, setExperiences] = useState<[Experiences]>();
  const [selectedExperience, setSelectedExperience] = useState<
    Experiences | ExperiencesNoId | null
  >(null);
  const { loading, error, data } = useQuery(GET_EXPERIENCES, {
    variables: { resumeId: resume.id },
  });
  useEffect(() => {
    if (data) {
      setExperiences(data.experiences);
    }
  }, [loading]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const insertOrUpdate = (experience: Experiences | ExperiencesNoId | null) => {
    if (experience) {
      // addUser({ variables: { user } });
    }
    setSelectedExperience(null);
  };

  return (
    <ContentContainer title={`Experiences`}>
      <div className="experiences">
        {!selectedExperience ? (
          <ExperiencesList
            experiences={experiences}
            setExperience={setSelectedExperience}
          ></ExperiencesList>
        ) : (
          <ExperienceForm
            selectedExperience={selectedExperience}
            submitExperience={insertOrUpdate}
          />
        )}
      </div>
    </ContentContainer>
  );
};

export default Experiences;
