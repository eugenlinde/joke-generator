import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, it } from "vitest";
import Navbar from "../components/Navbar";

describe("navbar", () => {
  it("renders the component", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  });
});
