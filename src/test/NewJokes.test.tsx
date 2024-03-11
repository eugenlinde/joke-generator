import { describe, it, vi, beforeEach } from "vitest";
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import NewJokes from '../layouts/NewJokes';
import {BrowserRouter as Router} from "react-router-dom";

vi.mock('axios');
vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...actual,
        useLoaderData: vi.fn(() => ({ categories: { data: ['category1', 'category2'] } })),
    }
})

describe('NewJokes', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });


    it('renders Navbar, Select, and List', async () => {
        await axios.get.mockResolvedValueOnce({ data: { value: "testJoke1" } })
            .mockResolvedValueOnce({ data: { value: "testJoke2" } })
            .mockResolvedValueOnce({ data: { value: "testJoke3" } });

        const { getByTestId } = render(<Router ><NewJokes /></Router>);

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(3)
        })

        const navbar = getByTestId('test-navbar');
        const select = getByTestId('test-select');
        const list = getByTestId('test-list');

        expect(navbar).toBeInTheDocument();
        expect(select).toBeInTheDocument();
        expect(list).toBeInTheDocument();

    });
});
