import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import List from '../components/List';
import { Joke } from '../types';
import { mockJoke, mockJokeTwo } from './mockJoke';

const mockJokeData: Joke[] = [mockJoke, mockJokeTwo];

const mockButtonCallback = vi.fn();

describe('List component', () => {
    it('should render the ListSkeleton component when data is empty', () => {
        render(
            <List
                data={[]}
                buttonText=""
                buttonCallback={mockButtonCallback}
            />,
        );
        expect(screen.getByRole('presentation')).toBeInTheDocument();
    });

    it('should render the joke list with button and date when data is provided', () => {
        render(
            <List
                data={mockJokeData}
                buttonText="Test Add"
                buttonCallback={mockButtonCallback}
            />,
        );

        expect(screen.getByText(mockJokeData[0].value)).toBeInTheDocument();
        expect(screen.getByText(mockJokeData[1].value)).toBeInTheDocument();
    });

    it('should call the buttonCallback function when button is clicked', () => {
        render(
            <List
                data={mockJokeData}
                buttonText="Test Add"
                buttonCallback={mockButtonCallback}
            />,
        );

        const button = screen.getAllByRole('button')[0];
        button.click();

        expect(mockButtonCallback).toHaveBeenCalledTimes(1);
    });
});
