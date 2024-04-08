import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import SavedJokes from '../components/SavedJokes';
import { Joke } from '../types';
import { mockJoke, mockJokeThree, mockJokeTwo } from './mockJoke';

const mockLocalStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    clear: vi.fn(),
    removeItem: vi.fn(),
    length: 3,
    key: vi.fn(),
};
global.localStorage = mockLocalStorage;

describe('SavedJokes Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders a message when there are no saved jokes', () => {
        mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify([]));
        const { getByText } = render(
            <Router>
                <SavedJokes />
            </Router>,
        );
        expect(
            getByText(
                "No saved jokes? Chuck Norris once made a joke so funny, it saved itself. Looks like you're not quite there yet.",
            ),
        ).toBeInTheDocument();
    });

    it('renders saved jokes grouped by category', () => {
        const savedJokes: Joke[] = [mockJoke, mockJokeTwo, mockJokeThree];

        mockLocalStorage.getItem.mockReturnValueOnce(
            JSON.stringify(savedJokes),
        );

        const { getByText } = render(
            <Router>
                <SavedJokes />
            </Router>,
        );

        expect(getByText('Mock category')).toBeInTheDocument();
        expect(getByText('Mock category two')).toBeInTheDocument();
        expect(getByText('Mock joke value')).toBeInTheDocument();
        expect(getByText('Mock joke value two')).toBeInTheDocument();
        expect(getByText('Mock joke value three')).toBeInTheDocument();
    });
});
