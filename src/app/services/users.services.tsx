import { API_ROOT } from "../constantes";
import { get, post } from './utils';
const LOCAL_API = 'users'

export interface Users extends UsersNoId {
    id: number,
};

export interface UsersNoId {
    username: String
};

async function getUsers(): Promise<Users[]> {
    const data = await get(LOCAL_API);
    return data;
}

async function addUser(user: UsersNoId): Promise<Users> {
    const data = await post(LOCAL_API, user);
    return data;
}

export {
    getUsers,
    addUser
};