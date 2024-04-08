import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from '../components/Button';
import { mockJoke } from './mockJoke';

describe('Button component', () => {
    it('renders the text on the button', () => {
        render(<Button text={'Click here'} joke={mockJoke} callback={vi.fn} />);
        expect(screen.getByTestId('test-button')).toHaveTextContent(
            'Click here',
        );
    });

    it('calls the callback with correct value on click', () => {
        const callback = vi.fn();
        render(
            <Button text={'Click here'} joke={mockJoke} callback={callback} />,
        );

        const button = screen.getByRole('button');
        button.click();

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(mockJoke);
    });
});
