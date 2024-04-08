import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import List from './List';
import Select from './Select';
import { Categories, Joke } from '../types';
import { addJokeInStorage } from '../util/jokesUtil';
import useFetchJokes from '../hooks/useFetchJokes';
import NewJokesLayout from '../layouts/NewJokesLayout';

const NewJokes = () => {
    const [category, setCategory] = useState<string>('all');
    const [jokes, setJokes] = useState<Joke[]>([]);
    const categories = useLoaderData() as Categories;
    void useFetchJokes(category, jokes, setJokes);

    const handleSave = (jokeToSave: Joke) => {
        jokeToSave.date = new Date().toUTCString();
        addJokeInStorage(jokeToSave);
        setJokes((prev) =>
            prev.filter((joke) => joke.value !== jokeToSave.value),
        );
    };

    return (
        <NewJokesLayout>
            <Select
                data={['all', ...categories.data]}
                value={category}
                callback={setCategory}
            />
            <List data={jokes} buttonText="ADD" buttonCallback={handleSave} />
        </NewJokesLayout>
    );
};

export default NewJokes;
