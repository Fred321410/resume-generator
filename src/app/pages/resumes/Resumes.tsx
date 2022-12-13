import { Users } from 'app/services/users.services';
import React from 'react';
import { useLocation } from 'react-router-dom';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import Page from '../../containers/Page/Page';
import './Resumes.scss';

const Resumes = () => {
  const location = useLocation();
  const user: Users = location.state;
  return (
    <Page
      left={
        <ContentContainer title={`${user.username}'s resumes`}>
          Coucou
        </ContentContainer>
      }
      right={<div>{user.username}</div>}
    />
  );
};

export default Resumes;
