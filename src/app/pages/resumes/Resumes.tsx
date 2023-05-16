import ElementsContainer from '../../containers/ElementsContainer/ElementsContainer';
import { Users } from '../../services/users.services';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import Page from '../../containers/Page/Page';
import './Resumes.scss';
import { useMutation, useQuery } from '@apollo/client';
import {
  GET_RESUMES,
  POST_RESUME,
  Resumes,
} from '../../services/resumes.services';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import ResumePreview from '../../containers/ResumePreview/ResumePreview';
import Textarea from '../../components/Textarea/Textarea';
import ExperienceForm from '../../containers/ExperienceForm/ExperienceForm';
import { Experiences } from '../../services/experiences.services';
import { useExperiencesBack } from './Resumes.functionnal';
import { Knowledge } from 'app/services/knowledge.services';

const Resumes = () => {
  const [resume, setResume] = useState<Resumes>({
    title: '',
    goals: '',
    subtitle: '',
    id: -1,
  });

  const location = useLocation();
  const user: Users = location.state;
  const { loading, error, data } = useQuery(GET_RESUMES, {
    variables: { userId: user.id },
  });
  const [updateResume] = useMutation(POST_RESUME, {
    refetchQueries: [{ query: GET_RESUMES }],
  });
  useEffect(() => {
    if (data) {
      setResume(data.resumes[0]);
    }
  }, [loading]);
  const test = useExperiencesBack(resume.id);

  if (loading || resume.id < 0) return <p>Loading ...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setResume((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const update = (event: React.MouseEvent | React.FormEvent) => {
    event.preventDefault();
    updateResume({ variables: { resume } });
  };

  return (
    <Page
      left={
        <>
          <ContentContainer title={`${user.username}'s resumes`}>
            <form className="resumes__form">
              <div className="resumes__form__row">
                <Input
                  type={'text'}
                  name={'title'}
                  label={'Title'}
                  value={resume.title}
                  onChange={handleChange}
                />
              </div>
              <div className="resumes__form__row">
                <Input
                  type={'text'}
                  name={'subtitle'}
                  label={'Subtitle'}
                  value={resume.subtitle}
                  onChange={handleChange}
                />
              </div>
              <div className="resumes__form__row">
                <Textarea
                  name={'goals'}
                  label={'Goal'}
                  value={resume.goals}
                  onChange={handleChange}
                />
              </div>
              <div className="resumes__form__row">
                <Button logo="plus" label="Update" onClick={update} />
              </div>
            </form>
          </ContentContainer>
          <ElementsContainer<Experiences>
            resume={resume}
            useBack={test}
            title="Expériences"
            Wrapper={ExperienceForm}
            getDefaultFormValues={() => ({
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
            })}
            labelKey="enterprise"
            elementKey="experience"
            elementsKey="experiences"
          />
          <ContentContainer title={`Knowledge`}></ContentContainer>
        </>
      }
      right={<ResumePreview user={user} resume={resume}></ResumePreview>}
    />
  );
};

export default Resumes;
