import { gql } from '@apollo/client';
import { get, post } from './utils';
const LOCAL_API = 'users'

export interface Users extends UsersNoId {
    id: number,
};

export interface UsersNoId {
    username: string
};

const isUser = (user: Users | UsersNoId | null): user is Users => {
  if (!user) return false;
  return (user as Users).id !== undefined;
}

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

const DELETE_USER = gql`
  mutation DeleteUser($id: Int) {
    deleteUser(id: $id)
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
  GET_USERS,
  DELETE_USER,
  isUser
};