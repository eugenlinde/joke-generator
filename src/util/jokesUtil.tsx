import { Joke } from "../types";

export const addJokeInStorage = (joke: Joke) => {
    const savedJokesJSON = localStorage.getItem('savedJokes');
    const savedJokes: Joke[] = savedJokesJSON ? JSON.parse(savedJokesJSON) : [];
    const valueExists = savedJokes.some(savedJoke =>
        savedJoke.value === joke.value
    );

    if (!valueExists) {
        const updatedJokes: Joke[] = [...savedJokes, joke];
        localStorage.setItem('savedJokes', JSON.stringify(updatedJokes));
    }
};

export const removeJokeInStorage = (jokeToRemove: Joke) => {
    const data = localStorage.getItem('savedJokes') ?? "";
    const savedJokes = JSON.parse(data) || [];
    const updatedJokes = savedJokes.filter((joke: Joke) => joke.value !== jokeToRemove.value);
    localStorage.setItem('savedJokes', JSON.stringify(updatedJokes));
};