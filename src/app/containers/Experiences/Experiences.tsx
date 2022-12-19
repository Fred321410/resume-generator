import ContentContainer from '../../components/ContentContainer/ContentContainer';
import React from 'react';
import Button from '../../components/Button/Button';
import './Experiences.scss';
import { GET_USERS, Users } from '../../services/users.services';
import { useQuery } from '@apollo/client';

interface ExperiencesProps {
  user: Users;
}

const Experiences = ({ user }: ExperiencesProps) => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const goToResumes = () => {
    console.log('Coucou');
  };

  return (
    <ContentContainer title={`Experiences`}>
      <div className="experiences">
        <Button
          logo={'plus'}
          label={'Add another experience'}
          onClick={goToResumes}
        />
      </div>
    </ContentContainer>
  );
};

export default Experiences;
