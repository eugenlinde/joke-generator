import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CardAlert from '../components/CardAlert';

describe('Card alert component', () => {
    it('renders text on the card', () => {
        render(<CardAlert text={'test text'} />);
        expect(screen.getByTestId('test-card-alert')).toHaveTextContent(
            'test text',
        );
    });
});
