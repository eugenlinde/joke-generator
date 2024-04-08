import axios, { AxiosResponse } from 'axios';

export async function loader(): Promise<AxiosResponse<string[]>> {
    return await axios.get(`${import.meta.env.VITE_API_URL}/jokes/categories`);
}
