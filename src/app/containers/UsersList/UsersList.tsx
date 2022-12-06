import React from 'react';
import './UsersList.scss';
import { Users } from '../../services/users.services';
import CardContainer from '../../components/CardContainer/CardContainer';
import Button from '../../components/Button/Button';
import { useQuery, gql, useMutation } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
    }
  }
`;

const POST_USER = gql`
  mutation AddUser($username: String) {
    addUser(username: $username) {
        id
        username
    }
}
`;

function UsersList(): JSX.Element {
    
    // const [users, setUsers] = useState<Users[]>([]);

    const { loading, error, data } = useQuery(GET_USERS);
    const [addUser] = useMutation(POST_USER, {
        refetchQueries: [{query: GET_USERS}],
      });

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Eddor : {error.message}</p>

    const UsersBoxes = data.users.map((user: Users) => {
        return (
          <CardContainer
            key={user.id}
          >
            {user.username}
          </CardContainer>
        );
      });

    async function addUserCall() {
        addUser({ variables: { username: 'Billie' } });
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