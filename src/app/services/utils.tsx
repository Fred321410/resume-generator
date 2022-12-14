import { API_ROOT } from '../constantes';

async function get<T>(localApi: string): Promise<T> {
  const data = await fetch(API_ROOT + localApi).then((r) => r.json());
  return data;
}

async function post<K, T>(localApi: string, body: K): Promise<T> {
  const data = await fetch(API_ROOT + localApi, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json());
  return data;
}

export { get, post };
