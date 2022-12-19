import Experiences from '../../containers/Experiences/Experiences';
import { Users } from 'app/services/users.services';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import Page from '../../containers/Page/Page';
import './Resumes.scss';
import { useQuery } from '@apollo/client';
import { GET_RESUMES, Resumes } from '../../services/resumes.services';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import ResumePreview from '../../containers/ResumePreview/ResumePreview';

const Resumes = () => {
  const [resume, setResume] = useState<Resumes>({
    title: '',
    goals: '',
    subtitle: '',
    id: 1,
  });
  const location = useLocation();
  const user: Users = location.state;
  const { loading, error, data } = useQuery(GET_RESUMES, {
    variables: { userId: user.id },
  });
  useEffect(() => {
    if (data) {
      setResume(data.resumes[0]);
    }
  }, [loading]);

  if (loading) return <p>Loading ...</p>;
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
                <Input
                  type={'text'}
                  name={'goals'}
                  label={'Goal'}
                  value={resume.goals}
                  onChange={handleChange}
                />
              </div>
              <div className="resumes__form__row">
                <Button logo="plus" label="Update" />
              </div>
            </form>
          </ContentContainer>
          <Experiences user={user}></Experiences>
          <ContentContainer title={`Knowledges`}></ContentContainer>
        </>
      }
      right={<ResumePreview></ResumePreview>}
    />
  );
};

export default Resumes;
