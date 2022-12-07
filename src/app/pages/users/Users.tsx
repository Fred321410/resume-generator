import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import Page from '../../containers/Page/Page';
import UserForm from '../../containers/UserForm/UserForm';
import UsersList from '../../containers/UsersList/UsersList';
import { GET_USERS, POST_USER, Users, UsersNoId } from '../../services/users.services'
import './Users.scss'

function Users(): JSX.Element {

    const [selectedUsers, setSelectedUsers] = useState<Users | UsersNoId | null>(null);
    const [addUser] = useMutation(POST_USER, {refetchQueries: [{query: GET_USERS}],});

    async function addUserCall() {
        setSelectedUsers({
            username: ''
        });
    }

    async function insertOrUpdate(user: Users | UsersNoId) {
        console.log(user);
        addUser({ variables: { username: user.username } });
        setSelectedUsers(null);
    }

    async function deleteUser() {
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
                            {selectedUsers
                                ? <Button
                                    logo='fa-solid fa-trash'
                                    label="Delete User"
                                    callback={deleteUser}/> 
                                : <Button
                                    logo='fa-solid fa-plus'
                                    label="Add User"
                                    isDisabled={!!selectedUsers}
                                    callback={addUserCall}/>
                            }
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
