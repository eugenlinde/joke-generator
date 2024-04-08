import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Joke } from '../types';

const useFetchJokes: (
    category: string,
    jokes: Joke[],
    setJokes: React.Dispatch<React.SetStateAction<Joke[]>>,
) => Promise<void> = async (category, jokes, setJokes) => {
    const [prevCategory, setPrevCategory] = useState<string>('all');
    useEffect(() => {
        const fetchJokes = async () => {
            const url =
                category && category !== 'all'
                    ? `${import.meta.env.VITE_API_URL}/jokes/random?category=${category}`
                    : `${import.meta.env.VITE_API_URL}/jokes/random`;
            const map = new Map<string, Joke>();
            const response = await Promise.all([
                axios.get(url),
                axios.get(url),
                axios.get(url),
            ]);
            response.map((joke) => {
                if (!map.has(joke.data.id)) {
                    map.set(joke.data.id, joke.data);
                }
            });

            for (let i = 0; i < 3; i++) {
                if (map.size === 3) break;

                const reqNeeded = 3 - map.size;
                const newRes = await Promise.all(
                    Array.from({ length: reqNeeded }, () => axios.get(url)),
                );
                newRes.map((joke) => {
                    if (!map.has(joke.data.id))
                        map.set(joke.data.id, joke.data);
                });
            }

            setJokes([...map.values()]);
        };

        if (category !== prevCategory || jokes.length === 0) {
            try {
                void fetchJokes();
            } catch (e) {
                console.log('failed fetching: ', e);
            }
        }

        setPrevCategory(category);
    }, [category, jokes, prevCategory, setJokes, setPrevCategory]);
};

export default useFetchJokes;
