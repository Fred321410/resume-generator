import React from 'react';
import './UsersList.scss';
import { GET_USERS, Users } from '../../services/users.services';
import CardContainer from '../../components/CardContainer/CardContainer';
import { useQuery } from '@apollo/client';

interface UsersListProps {
  setUsers: (user: Users) => void,
}

const UsersList = ({setUsers}: UsersListProps) => {

  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error : {error.message}</p>

  const UsersBoxes = data.users.map((user: Users) => {
    return (
      <CardContainer onClick={() => setUsers(user)} key={user.id}>
        {user.username}
      </CardContainer>
    );
  });

  return (
    <div className='users-list'>
      <div className='users-list__title'>
                Users
      </div>
      <div className='users-list__grid'>
        {UsersBoxes}
      </div>
    </div>
  );
}

export default UsersList;