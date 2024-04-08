import { useState } from 'react';
import CardAlert from './CardAlert';
import List from './List';
import { Joke } from '../types';
import { removeJokeInStorage } from '../util/jokesUtil';
import useSavedJokes from '../hooks/useSavedJokes';
import SavedJokesLayout from '../layouts/SavedJokesLayout';

const SavedJokes = () => {
    const [jokes, setJokes] = useState<Joke[]>([]);
    const groupedData = useSavedJokes(jokes, setJokes);
    const handleRemove = (jokeToRemove: Joke) => {
        removeJokeInStorage(jokeToRemove);
        setJokes((prev) =>
            prev.filter((joke) => joke.value !== jokeToRemove.value),
        );
    };

    if (jokes.length === 0) {
        return (
            <SavedJokesLayout>
                <CardAlert text="No saved jokes? Chuck Norris once made a joke so funny, it saved itself. Looks like you're not quite there yet." />
            </SavedJokesLayout>
        );
    }

    return (
        <SavedJokesLayout>
            {Object.keys(groupedData).map((category) => (
                <div className="mt-4" key={category}>
                    <h2 className="text-lg font-semibold">{category}</h2>
                    <List
                        data={groupedData[category]}
                        buttonText="REMOVE"
                        buttonCallback={handleRemove}
                    />
                </div>
            ))}
        </SavedJokesLayout>
    );
};

export default SavedJokes;
