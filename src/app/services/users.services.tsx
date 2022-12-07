import { gql } from '@apollo/client';
import { get, post } from './utils';
const LOCAL_API = 'users'

export interface Users extends UsersNoId {
    id: number,
};

export interface UsersNoId {
    username: string
};

async function getUsers(): Promise<Users[]> {
    const data = await get(LOCAL_API);
    return data;
}

async function addUser(user: UsersNoId): Promise<Users> {
    const data = await post(LOCAL_API, user);
    return data;
}

const POST_USER = gql`
  mutation AddUser($username: String) {
    addUser(username: $username) {
        id
        username
    }
}
`;

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
    }
  }
`;

export {
    getUsers,
    addUser,
    POST_USER,
    GET_USERS
};