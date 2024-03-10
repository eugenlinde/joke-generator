import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardAlert from "../components/CardAlert";

describe("Card alert component", () => {
   it("renders text on the card", () => {
       render(<CardAlert text={"test text"} />);
       expect(screen.getByTestId("test-card-alert")).toHaveTextContent("test text");
   })
});