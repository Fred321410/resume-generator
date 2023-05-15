import React, { useEffect, useState } from 'react';
import './Experiences.scss';
import {
  GET_EXPERIENCES,
  Experiences,
  ExperiencesNoId,
  POST_EXPERIENCE,
  DELETE_EXPERIENCE,
} from '../../services/experiences.services';
import { useMutation, useQuery } from '@apollo/client';
import { Resumes } from '../../services/resumes.services';
import ExperienceForm from '../ExperienceForm/ExperienceForm';
import Elements from '../Elements/Elements';

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
  const [addExperience] = useMutation(POST_EXPERIENCE, {
    refetchQueries: [
      { query: GET_EXPERIENCES, variables: { resumeId: resume.id } },
    ],
  });
  const [deleteExperience] = useMutation(DELETE_EXPERIENCE, {
    refetchQueries: [
      { query: GET_EXPERIENCES, variables: { resumeId: resume.id } },
    ],
  });
  useEffect(() => {
    if (data) {
      setExperiences(data.experiences);
    }
  }, [loading, data]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const insertOrUpdate = (experience: Experiences | ExperiencesNoId | null) => {
    if (experience) {
      addExperience({ variables: { experience, resumeId: resume.id } });
    }
    setSelectedExperience(null);
  };

  const remove = () => {
    if (selectedExperience && selectedExperience.id) {
      deleteExperience({ variables: { id: selectedExperience.id } });
    }
    setSelectedExperience(null);
  };

  const setSelectedExperienceMapper = (experienceId: number | null) => {
    if (experienceId && experiences) {
      const experience = experiences.find((exp) => exp.id === experienceId);
      if (experience) setSelectedExperience(experience);
    } else {
      setSelectedExperience({
        poste: '',
        enterprise: '',
        from: '',
        to: '',
        esn: '',
        country: '',
        city: '',
        description: '',
        logo: '',
        tools: '',
        order: '',
        page: '',
      });
    }
  };

  return (
    <Elements
      title={`Experiences`}
      elements={
        experiences?.map((el) => {
          return { id: el.id, label: el.enterprise };
        }) as [Elements]
      }
      displayForm={!!selectedExperience}
      setSelectedElement={setSelectedExperienceMapper}
    >
      <ExperienceForm
        selectedExperience={selectedExperience}
        submitExperience={insertOrUpdate}
        removeExperience={remove}
      />
    </Elements>
  );
};

export default Experiences;
