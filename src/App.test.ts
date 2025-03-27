import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import App from "./App.vue";

describe("App.vue", () => {
  it("renders the welcome message", async () => {
    render(App);
    expect(screen.getByText("Vite + Vue")).toBeInTheDocument();
  });
});
