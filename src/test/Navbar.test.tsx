import { describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('navbar', () => {
    it('renders the component', () => {
        render(<Router><Navbar /></Router>);
    });
})


