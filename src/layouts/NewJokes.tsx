import axios, { AxiosResponse } from "axios";
import {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";
import {addJokeInStorage} from "../util/jokesUtil";
import Select from "../components/Select";
import List from "../components/List";
import Navbar from "../components/Navbar";
import {Joke} from "../types";

const NewJokes = () => {
    const [category, setCategory] = useState<string>("all");
    const [prevCategory, setPrevCategory] = useState<string>("all");
    const [jokes, setJokes] = useState<Joke[]>([]);
    const { categories } = useLoaderData() as { categories: AxiosResponse<string[]> };

    useEffect(() => {
        const fetchJokes = async () => {
            const url = category && category !== "all" ? `https://api.chucknorris.io/jokes/random?category=${category}` : "https://api.chucknorris.io/jokes/random";
            const set = new Set<string>();
            for (let i = 0; i < 3; i++) {
                const response = await axios.get(url);
                set.add(response.data.value);
            }
            setJokes([...set].map((el: string) => { return { value: el }}))
        };

        if (category !== prevCategory || jokes.length === 0) {
            try {
                void fetchJokes();
            } catch (e) {
                console.log("failed fetching: ", e);
            }
        }

        setPrevCategory(category);
    }, [category, jokes, prevCategory]);

    const handleSave = (jokeToSave: Joke) => {
        jokeToSave.date = new Date().toUTCString();
        jokeToSave.category = category ?? "all";
        addJokeInStorage(jokeToSave);
        setJokes(prev => prev.filter(joke => joke.value !== jokeToSave.value));
    }

    return (
        <>
            <Navbar />
            <main className="mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
                <Select data={["all", ...categories.data]} value={category} callback={setCategory} />
                <List data={jokes} buttonText="ADD" buttonCallback={handleSave} />
            </main>
        </>
    )
}

export default NewJokes;