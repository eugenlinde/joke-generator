import { render } from '@testing-library/react';
import { useRouteError } from 'react-router-dom';
import { describe, it, vi, expect, Mock } from 'vitest';
import ErrorPage from '../ErrorPage';

vi.mock('react-router-dom', (importOriginal) => {
    const actual = importOriginal();
    return {
        ...actual,
        useRouteError: vi.fn(),
    };
});

describe('ErrorPage Component', () => {
    it('renders error message from useRouteError', () => {
        const error = {
            statusText: 'Not Found',
            message: 'Page not found',
        };

        // Mock useRouteError to return the error
        (useRouteError as Mock).mockReturnValue(error);

        const { getByText } = render(<ErrorPage />);

        expect(getByText('Error: Something went wrong...')).toBeInTheDocument();
        expect(getByText('Not Found')).toBeInTheDocument();
    });
});
