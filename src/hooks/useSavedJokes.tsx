import { Joke } from '../types';
import { useEffect, useMemo } from 'react';

const useSavedJokes = (
    jokes: Joke[],
    setJokes: (value: ((prevState: Joke[]) => Joke[]) | Joke[]) => void,
) => {
    const groupedData: Record<string, Joke[]> = useMemo(() => {
        const tempArr: Record<string, Joke[]> = {};
        jokes.forEach((joke) => {
            const category = joke.categories[0] ?? 'unspecified';
            if (!tempArr[category]) {
                tempArr[category] = [];
            }
            tempArr[category].push(joke);
        });

        for (const category in tempArr) {
            tempArr[category].sort((a, b) => {
                if (!a.date || !b.date) return 0;
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            });
        }

        return tempArr;
    }, [jokes]);

    useEffect(() => {
        try {
            const data = localStorage.getItem('savedJokes') ?? '';
            const savedJokes = JSON.parse(data) || [];
            setJokes(savedJokes);
        } catch (error) {
            console.error('errwouldr parsing saved jokes:', error);
            setJokes([]);
        }
    }, [setJokes]);

    return groupedData;
};

export default useSavedJokes;
