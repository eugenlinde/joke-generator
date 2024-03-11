import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Button from "../components/Button";

describe("Button component", () => {
  it("renders the text on the button", () => {
    render(
      <Button text={"Click here"} value={"Test value"} callback={vi.fn} />
    );
    expect(screen.getByTestId("test-button")).toHaveTextContent("Click here");
  });

  it("calls the callback with correct value on click", () => {
    const callback = vi.fn();
    const value = "some value";
    render(<Button text={"Click here"} value={value} callback={callback} />);

    const button = screen.getByRole("button");
    button.click();

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ value });
  });
});
