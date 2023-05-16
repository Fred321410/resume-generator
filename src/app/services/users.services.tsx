import { gql } from '@apollo/client';
import { get, post } from './utils';
const LOCAL_API = 'users';

export interface Users {
  id?: number;
  username: string;
  birthdate: string;
  telephone: string;
  email: string;
  adresse: string;
  city: string;
}

const isUser = (user: Users | null): user is Users => {
  //if (!user) return false;
  return user?.id !== undefined;
};

async function getUsers(): Promise<Users[]> {
  const data = await get<Users[]>(LOCAL_API);
  return data;
}

async function addUser(user: Users): Promise<Users> {
  const data = await post<Users, Users>(LOCAL_API, user);
  return data;
}

const POST_USER = gql`
  mutation AddUser($user: UserInput) {
    addUser(user: $user) {
      id
      username
      birthdate
      telephone
      email
      adresse
      city
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
      birthdate
      telephone
      email
      adresse
      city
    }
  }
`;

export { getUsers, addUser, POST_USER, GET_USERS, DELETE_USER, isUser };
