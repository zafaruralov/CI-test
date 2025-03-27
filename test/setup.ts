import { expect } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";

// Ensure `expect` exists before extending
if (expect && typeof expect.extend === "function") {
  expect.extend(matchers);
} else {
  console.error("Vitest `expect` is not available.");
}
