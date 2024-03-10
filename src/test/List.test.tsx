import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import List from "../components/List";
import { Joke } from "../types";

const mockJokeData: Joke[] = [
    { value: "This is a first joke", date: "2024-03-10T00:00:00Z", category: "testing" },
    { value: "This is a second joke", date: "2024-02-11T00:00:00Z", category: "dev" },
];

const mockButtonCallback = vi.fn();

describe("List component", () => {
    it("should render the ListSkeleton component when data is empty", () => {
        render(<List data={[]} buttonText="" buttonCallback={mockButtonCallback} />);
        expect(screen.getByRole("presentation")).toBeInTheDocument();
    });

    it("should render the joke list with button and date when data is provided", () => {
        render(
            <List data={mockJokeData} buttonText="Test Add" buttonCallback={mockButtonCallback} />
        );

        expect(screen.getByText(mockJokeData[0].value)).toBeInTheDocument();
        expect(screen.getByText(mockJokeData[1].date)).toBeInTheDocument();
    });

    it("should call the buttonCallback function when button is clicked", () => {
        render(
            <List data={mockJokeData} buttonText="Test Add" buttonCallback={mockButtonCallback} />
        );

        const button = screen.getAllByRole("button", { text: /Show Details/i })[0];
        button.click();

        expect(mockButtonCallback).toHaveBeenCalledTimes(1);
    });
})