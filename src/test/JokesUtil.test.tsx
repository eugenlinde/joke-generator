import { beforeEach, describe, expect, it } from "vitest";
import { Joke } from "../types";
import { addJokeInStorage, removeJokeInStorage } from "../util/jokesUtil";

describe("addJokeInStorage function", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should add a joke to localStorage if it does not already exist", () => {
    const joke: Joke = { value: "test joke" };
    addJokeInStorage(joke);

    const savedJokes = JSON.parse(localStorage.getItem("savedJokes") || "[]");
    expect(savedJokes).toContainEqual(joke);
  });

  it("should not add a joke to localStorage if it already exists", () => {
    const joke: Joke = { value: "test joke" };
    localStorage.setItem("savedJokes", JSON.stringify([joke]));

    addJokeInStorage(joke);

    const savedJokes = JSON.parse(localStorage.getItem("savedJokes") || "[]");
    expect(savedJokes).toHaveLength(1);
  });
});

describe("removeJokeInStorage function", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should remove a joke from localStorage", () => {
    const joke: Joke = { value: "test joke" };
    localStorage.setItem("savedJokes", JSON.stringify([joke]));

    removeJokeInStorage(joke);

    const savedJokes = JSON.parse(localStorage.getItem("savedJokes") || "[]");
    expect(savedJokes).toHaveLength(0);
  });

  it("should not remove any joke from localStorage if the joke to remove is not present", () => {
    const joke: Joke = { value: "test joke" };
    localStorage.setItem(
      "savedJokes",
      JSON.stringify([{ value: "another joke" }])
    );

    removeJokeInStorage(joke);

    const savedJokes = JSON.parse(localStorage.getItem("savedJokes") || "[]");
    expect(savedJokes).toHaveLength(1);
  });
});
