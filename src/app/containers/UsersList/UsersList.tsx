import React, { useEffect, useState } from 'react';
import './UsersList.scss';
import { getUsers, Users, addUser } from '../../services/users.services';
import CardContainer from '../../components/CardContainer/CardContainer';
import Button from '../../components/Button/Button';

function UsersList(): JSX.Element {
    
    const [users, setUsers] = useState<Users[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const users = await getUsers();
            setUsers(users);
        };
        
        fetchData();
    }, []);

    const UsersBoxes = users.map(user => {
        return (
          <CardContainer
            key={user.id}
          >
            {user.username}
          </CardContainer>
        );
      });

    async function addUserCall() {
        const result = await addUser({username: 'jkhuy'});
        setUsers(prevData => [...prevData, result]);
    }

    return (
        <div className='users-list'>
            <div className='users-list__title'>
                Hello Every one
            </div>
            <div className='users-list__grid'>
                {UsersBoxes}
                <Button logo='fa-solid fa-plus' label="Add User" callback={addUserCall}/>
            </div>
        </div>
    );
}

export default UsersList;