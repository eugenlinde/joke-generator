import axios, {AxiosResponse} from "axios";

export async function loader(): Promise<{ categories: AxiosResponse<string[]> }> {
    const categories = await axios.get("https://api.chucknorris.io/jokes/categories");

    return { categories };
}