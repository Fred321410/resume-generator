import { API_ROOT } from "../constantes";


async function get(localApi: String): Promise<any> {
    const data = await fetch(API_ROOT + localApi).then(r => r.json());
    return data;
}

async function post(localApi: String, body: any): Promise<any> {
    const data = await fetch(API_ROOT + localApi, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
    }).then(r => r.json());
    return data;
}

export {
    get,
    post
};