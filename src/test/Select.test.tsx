import { act, render, screen, waitFor } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import Select from "../components/Select";

describe("select component", () => {
  const data = ["a", "b,", "c"];
  const mockCallback = vi.fn();

  it("renders the component", () => {
    render(<Select data={data} value={data[0]} callback={vi.fn()} />);
  });

  it("displays correct options when clicked", async () => {
    const { getByTestId, getByRole } = render(
      <Select data={data} value={data[0]} callback={mockCallback} />
    );
    const button = getByRole("button");

    act(() => {
      button.click();
    });

    await waitFor(() =>
      expect(screen.getByRole("listbox")).toBeInTheDocument()
    );

    const options = screen.getAllByRole("option");
    expect(options.length).toBe(data.length);
  });
});
