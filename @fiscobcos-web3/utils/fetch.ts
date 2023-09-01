import axios from 'axios';

export const request = async (method: string, url: string, params?:any) => {
    let resp;
    if (method === 'post' || method.toLowerCase() === 'post') {
        resp = await axios.post(url);
    }

    if (method === 'get' || method.toLowerCase() === 'get') {
        resp = await axios.get(url);
    }

    return resp;
}