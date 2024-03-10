import { describe, it, vi } from "vitest";
import { render } from "@testing-library/react";
import Select from "../components/Select";

describe("select", () => {
    it("renders the component", () => {
        render(<Select data={["a", "b,", "c"]} value={"a"} callback={vi.fn()} />)
    })
})