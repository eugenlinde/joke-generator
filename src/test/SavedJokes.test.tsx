import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import SavedJokes from "../layouts/SavedJokes";
import { Joke } from "../types";

const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
};
global.localStorage = mockLocalStorage;

describe("SavedJokes Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders a message when there are no saved jokes", () => {
    mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify([]));
    const { getByText } = render(
      <Router>
        <SavedJokes />
      </Router>
    );
    expect(
      getByText(
        "No saved jokes? Chuck Norris once made a joke so funny, it saved itself. Looks like you're not quite there yet."
      )
    ).toBeInTheDocument();
  });

  it("renders saved jokes grouped by category", () => {
    const savedJokes: Joke[] = [
      {
        value: "Joke 1",
        category: "Category 1",
        date: new Date().toISOString(),
      },
      {
        value: "Joke 2",
        category: "Category 2",
        date: new Date().toISOString(),
      },
      {
        value: "Joke 3",
        category: "Category 1",
        date: new Date().toISOString(),
      },
    ];

    mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify(savedJokes));

    const { getByText } = render(
      <Router>
        <SavedJokes />
      </Router>
    );

    expect(getByText("Category 1")).toBeInTheDocument();
    expect(getByText("Category 2")).toBeInTheDocument();
    expect(getByText("Joke 1")).toBeInTheDocument();
    expect(getByText("Joke 2")).toBeInTheDocument();
    expect(getByText("Joke 3")).toBeInTheDocument();
  });
});
