import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import Page from '../../containers/Page/Page';
import UserForm from '../../containers/UserForm/UserForm';
import UsersList from '../../containers/UsersList/UsersList';
import { GET_USERS, POST_USER, DELETE_USER, Users, UsersNoId, isUser } from '../../services/users.services'
import './Users.scss'

const Users = () => {

  const [selectedUsers, setSelectedUsers] = useState<Users | UsersNoId | null>(null);
  const [addUser] = useMutation(POST_USER, {refetchQueries: [{query: GET_USERS}],});
  const [deleteUser] = useMutation(DELETE_USER, {refetchQueries: [{query: GET_USERS}],});

  const addUserCall = () => {
    setSelectedUsers({
      username: ''
    });
  }

  const insertOrUpdate = (user: Users | UsersNoId) => {
    addUser({ variables: { username: user.username } });
    setSelectedUsers(null);
  }

  const remove = () => {
    if (isUser(selectedUsers)) {
      deleteUser({ variables: { id: selectedUsers.id } });
    }
    setSelectedUsers(null);
  }

  return (
    <Page
      left={
        <ContentContainer title='User selection'>
          <div className='users'>
            <div className='users__header'>
              <div className='users__header__title'>
                            Choose a user from the right panel or add another one with the button below
              </div>
              <div className='users__header__button'>
                <Button
                  logo={selectedUsers ? 'trash' : 'plus'}
                  label={selectedUsers ? 'Delete User' : 'Add User'}
                  callback={selectedUsers ? remove : addUserCall}/>
              </div>
            </div>
            {selectedUsers ? <UserForm selectedUser={selectedUsers} submitUser={insertOrUpdate} /> : ''}
          </div>
        </ContentContainer>
      }
      right={
        <UsersList setUsers={setSelectedUsers} />
      }
    />
  );
}

export default Users;
