import { beforeEach, describe, expect, it } from 'vitest';
import { addJokeInStorage, removeJokeInStorage } from '../util/jokesUtil';
import { mockJoke } from './mockJoke';

describe('addJokeInStorage function', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('should add a joke to localStorage if it does not already exist', () => {
        addJokeInStorage(mockJoke);

        const savedJokes = JSON.parse(
            localStorage.getItem('savedJokes') || '[]',
        );
        expect(savedJokes).toContainEqual(mockJoke);
    });

    it('should not add a joke to localStorage if it already exists', () => {
        localStorage.setItem('savedJokes', JSON.stringify([mockJoke]));

        addJokeInStorage(mockJoke);

        const savedJokes = JSON.parse(
            localStorage.getItem('savedJokes') || '[]',
        );
        expect(savedJokes).toHaveLength(1);
    });
});

describe('removeJokeInStorage function', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('should remove a joke from localStorage', () => {
        localStorage.setItem('savedJokes', JSON.stringify([mockJoke]));

        removeJokeInStorage(mockJoke);

        const savedJokes = JSON.parse(
            localStorage.getItem('savedJokes') || '[]',
        );
        expect(savedJokes).toHaveLength(0);
    });

    it('should not remove any joke from localStorage if the joke to remove is not present', () => {
        localStorage.setItem(
            'savedJokes',
            JSON.stringify([{ value: 'another joke' }]),
        );

        removeJokeInStorage(mockJoke);

        const savedJokes = JSON.parse(
            localStorage.getItem('savedJokes') || '[]',
        );
        expect(savedJokes).toHaveLength(1);
    });
});
